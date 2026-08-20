import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const messages = await sql`
    SELECT id, name, email, message, read, created_at FROM messages ORDER BY created_at DESC
  `;

  return NextResponse.json({ success: true, messages });
}

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const { id } = await req.json();
  await sql`UPDATE messages SET read = TRUE WHERE id = ${id}`;

  return NextResponse.json({ success: true });
}
