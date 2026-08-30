import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { sendOtpEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const RESEND_COOLDOWN_MS = 60 * 1000; // 1 minute between OTP sends

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Valid email and a password of at least 6 characters are required." },
        { status: 400 }
      );
    }

    const rateLimit = await checkRateLimit({
      key: `register:${email.toLowerCase()}`,
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

    const existing = await sql`
      SELECT id, verified, last_otp_sent_at FROM users WHERE email = ${email}
    `;

    if (existing.length > 0 && existing[0].verified) {
      return NextResponse.json(
        { success: false, message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    if (existing.length > 0 && existing[0].last_otp_sent_at) {
      const elapsed = Date.now() - Number(existing[0].last_otp_sent_at);
      if (elapsed < RESEND_COOLDOWN_MS) {
        const waitSeconds = Math.ceil((RESEND_COOLDOWN_MS - elapsed) / 1000);
        return NextResponse.json(
          { success: false, message: `Please wait ${waitSeconds} second(s) before requesting another code.` },
          { status: 429 }
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === process.env.ADMIN_EMAIL ? "ADMIN" : "USER";
    const otp = generateOtp();
    const otpExpires = Date.now() + 10 * 60 * 1000;
    const now = Date.now();

    if (existing.length > 0) {
      await sql`
        UPDATE users
        SET password = ${hashedPassword}, otp_code = ${otp}, otp_expires = ${otpExpires}, last_otp_sent_at = ${now}
        WHERE email = ${email}
      `;
    } else {
      await sql`
        INSERT INTO users (email, password, role, verified, otp_code, otp_expires, last_otp_sent_at)
        VALUES (${email}, ${hashedPassword}, ${role}, FALSE, ${otp}, ${otpExpires}, ${now})
      `;
    }

    await sendOtpEmail(email, otp);

    return NextResponse.json({ success: true, email });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
