import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";
import { deleteImage } from "@/lib/cloudinary";

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

  const { imageUrl, caption, cloudinaryId } = await req.json();
  if (!imageUrl) {
    return NextResponse.json({ success: false, message: "Image URL is required." }, { status: 400 });
  }

  await sql`
    INSERT INTO gallery (image_url, caption, cloudinary_id)
    VALUES (${imageUrl}, ${caption || null}, ${cloudinaryId || null})
  `;

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 403 });
  }

  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ success: false, message: "Image id is required." }, { status: 400 });
  }

  const rows = await sql`SELECT cloudinary_id FROM gallery WHERE id = ${id}`;
  const image = rows[0];

  if (image?.cloudinary_id) {
    try {
      await deleteImage(image.cloudinary_id);
    } catch (err) {
      console.error("Cloudinary delete failed:", err);
    }
  }

  await sql`DELETE FROM gallery WHERE id = ${id}`;

  return NextResponse.json({ success: true });
}
