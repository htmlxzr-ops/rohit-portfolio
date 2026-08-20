import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    const userAgent = req.headers.get("user-agent") || "";

    await sql`INSERT INTO visitors (path, user_agent) VALUES (${path}, ${userAgent})`;

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
