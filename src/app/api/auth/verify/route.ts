import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Email and OTP are required." },
        { status: 400 }
      );
    }

    const rows = await sql`
      SELECT id, otp_code, otp_expires, verified FROM users WHERE email = ${email}
    `;
    const user = rows[0];

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Account not found." },
        { status: 404 }
      );
    }

    if (user.verified) {
      return NextResponse.json(
        { success: false, message: "Account already verified." },
        { status: 409 }
      );
    }

    if (!user.otp_code || user.otp_code !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP." },
        { status: 401 }
      );
    }

    if (Number(user.otp_expires) < Date.now()) {
      return NextResponse.json(
        { success: false, message: "OTP has expired. Please register again to get a new code." },
        { status: 410 }
      );
    }

    await sql`
      UPDATE users SET verified = TRUE, otp_code = NULL, otp_expires = NULL WHERE email = ${email}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
