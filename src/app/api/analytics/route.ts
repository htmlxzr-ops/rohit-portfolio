import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const totalVisits = await sql`SELECT COUNT(*) FROM visitors`;
  const totalUsers = await sql`SELECT COUNT(*) FROM users WHERE verified = TRUE`;
  const totalPosts = await sql`SELECT COUNT(*) FROM posts`;

  return NextResponse.json({
    success: true,
    totalVisits: totalVisits[0].count,
    totalUsers: totalUsers[0].count,
    totalPosts: totalPosts[0].count,
  });
}
