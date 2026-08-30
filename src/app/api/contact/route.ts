import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, ContactFormData } from "@/lib/validators/contact";
import { sendContactEmail } from "@/lib/email";
import { sql } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData;

    const { valid, errors } = validateContactForm(body);
    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const rateLimit = await checkRateLimit({
      key: `contact:${body.email.toLowerCase()}`,
      maxAttempts: 3,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      const minutes = Math.ceil((rateLimit.retryAfterSeconds || 0) / 60);
      return NextResponse.json(
        { success: false, message: `Too many messages sent. Please try again in ${minutes} minute(s).` },
        { status: 429 }
      );
    }

    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${body.name}, ${body.email}, ${body.message})
    `;

    await sendContactEmail(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
