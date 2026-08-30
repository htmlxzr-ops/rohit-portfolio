import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { sendOtpEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const RESEND_COOLDOWN_MS = 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
    }

    const rateLimit = await checkRateLimit({
      key: `resend-otp:${email.toLowerCase()}`,
      maxAttempts: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      const minutes = Math.ceil((rateLimit.retryAfterSeconds || 0) / 60);
      return NextResponse.json(
        { success: false, message: `Too many attempts. Please try again in ${minutes} minute(s).` },
        { status: 429 }
      );
    }

    const rows = await sql`SELECT id, verified, last_otp_sent_at FROM users WHERE email = ${email}`;
    const user = rows[0];

    if (!user) {
      return NextResponse.json({ success: false, message: "Account not found." }, { status: 404 });
    }

    if (user.verified) {
      return NextResponse.json({ success: false, message: "Account already verified." }, { status: 409 });
    }

    if (user.last_otp_sent_at) {
      const elapsed = Date.now() - Number(user.last_otp_sent_at);
      if (elapsed < RESEND_COOLDOWN_MS) {
        const waitSeconds = Math.ceil((RESEND_COOLDOWN_MS - elapsed) / 1000);
        return NextResponse.json(
          { success: false, message: `Please wait ${waitSeconds} second(s) before requesting another code.` },
          { status: 429 }
        );
      }
    }

    const otp = generateOtp();
    const otpExpires = Date.now() + 10 * 60 * 1000;
    const now = Date.now();

    await sql`
      UPDATE users SET otp_code = ${otp}, otp_expires = ${otpExpires}, last_otp_sent_at = ${now}
      WHERE email = ${email}
    `;

    await sendOtpEmail(email, otp);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
