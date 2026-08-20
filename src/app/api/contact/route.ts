import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, ContactFormData } from "@/lib/validators/contact";
import { sendContactEmail } from "@/lib/email";
import { sql } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData;

    const { valid, errors } = validateContactForm(body);
    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
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
