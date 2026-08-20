import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { sendOtpEmail } from "@/lib/email";

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Valid email and a password of at least 6 characters are required." },
        { status: 400 }
      );
    }

    const existing = await sql`SELECT id, verified FROM users WHERE email = ${email}`;
    if (existing.length > 0 && existing[0].verified) {
      return NextResponse.json(
        { success: false, message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === process.env.ADMIN_EMAIL ? "ADMIN" : "USER";
    const otp = generateOtp();
    const otpExpires = Date.now() + 10 * 60 * 1000; // epoch ms, 10 minutes from now

    if (existing.length > 0) {
      // Unverified account exists — update it with a fresh OTP
      await sql`
        UPDATE users
        SET password = ${hashedPassword}, otp_code = ${otp}, otp_expires = ${otpExpires}
        WHERE email = ${email}
      `;
    } else {
      await sql`
        INSERT INTO users (email, password, role, verified, otp_code, otp_expires)
        VALUES (${email}, ${hashedPassword}, ${role}, FALSE, ${otp}, ${otpExpires})
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
