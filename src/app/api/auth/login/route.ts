import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sql } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    const rateLimit = await checkRateLimit({
      key: `login:${email.toLowerCase()}`,
      maxAttempts: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      const minutes = Math.ceil((rateLimit.retryAfterSeconds || 0) / 60);
      return NextResponse.json(
        { success: false, message: `Too many login attempts. Please try again in ${minutes} minute(s).` },
        { status: 429 }
      );
    }

    const rows = await sql`
      SELECT id, email, password, role, verified FROM users WHERE email = ${email}
    `;
    const user = rows[0];

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    if (!user.verified) {
      return NextResponse.json(
        { success: false, message: "Please verify your email before logging in.", needsVerification: true, email: user.email },
        { status: 403 }
      );
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      success: true,
      user: { email: user.email, role: user.role },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
