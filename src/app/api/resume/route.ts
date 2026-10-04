import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import ResumeDocument from "@/lib/pdf/ResumeDocument";

export async function GET() {
  try {
    const buffer = await renderToBuffer(React.createElement(ResumeDocument));

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Rohit-Alam-Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Resume PDF generation error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to generate resume." },
      { status: 500 }
    );
  }
}
