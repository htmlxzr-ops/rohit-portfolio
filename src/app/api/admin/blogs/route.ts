import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const posts = await sql`SELECT * FROM posts ORDER BY created_at DESC`;
  return NextResponse.json({ success: true, posts });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 403 });
  }

  try {
    const { title, excerpt, content, coverImage } = await req.json();

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: "Title, excerpt, and content are required." },
        { status: 400 }
      );
    }

    const slug = slugify(title);

    await sql`
      INSERT INTO posts (title, slug, excerpt, content, cover_image)
      VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${coverImage || null})
    `;

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create post. The title might already be in use." },
      { status: 500 }
    );
  }
}
