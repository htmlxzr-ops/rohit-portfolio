import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";
import { deleteImage } from "@/lib/cloudinary";

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
    const { title, excerpt, content, coverImage, coverImageId } = await req.json();

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: "Title, excerpt, and content are required." },
        { status: 400 }
      );
    }

    const slug = slugify(title);

    await sql`
      INSERT INTO posts (title, slug, excerpt, content, cover_image, cover_image_id)
      VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${coverImage || null}, ${coverImageId || null})
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

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const { id, published } = await req.json();
  await sql`UPDATE posts SET published = ${published} WHERE id = ${id}`;

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ success: false, message: "Post id is required." }, { status: 400 });
  }

  const rows = await sql`SELECT cover_image_id FROM posts WHERE id = ${id}`;
  const post = rows[0];

  if (post?.cover_image_id) {
    try {
      await deleteImage(post.cover_image_id);
    } catch (err) {
      console.error("Cloudinary delete failed:", err);
    }
  }

  await sql`DELETE FROM posts WHERE id = ${id}`;

  return NextResponse.json({ success: true });
}
