import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { uploadImage } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 403 });
  }

  try {
    const { image, folder } = await req.json();

    if (!image) {
      return NextResponse.json({ success: false, message: "No image provided." }, { status: 400 });
    }

    const url = await uploadImage(image, folder || "blogs");

    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: "Upload failed." }, { status: 500 });
  }
}
