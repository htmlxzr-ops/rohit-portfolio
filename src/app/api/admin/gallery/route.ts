import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const images = await sql`SELECT * FROM gallery ORDER BY created_at DESC`;
  return NextResponse.json({ success: true, images });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 403 });
  }

  const { imageUrl, caption } = await req.json();
  if (!imageUrl) {
    return NextResponse.json({ success: false, message: "Image URL is required." }, { status: 400 });
  }

  await sql`INSERT INTO gallery (image_url, caption) VALUES (${imageUrl}, ${caption || null})`;

  return NextResponse.json({ success: true });
}
