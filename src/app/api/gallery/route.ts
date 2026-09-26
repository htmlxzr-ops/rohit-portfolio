import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const images = await sql`SELECT id, image_url, caption, created_at FROM gallery ORDER BY created_at DESC`;
  return NextResponse.json({ success: true, images });
}
