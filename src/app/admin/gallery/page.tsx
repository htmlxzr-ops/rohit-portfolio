"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

interface GalleryImage {
  id: number;
  image_url: string;
  caption: string | null;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function loadImages() {
    setLoading(true);
    fetch("/api/admin/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data.images || []))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadImages();
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(selected);
  }

  async function handleUpload() {
    if (!file || !preview) return;
    setUploading(true);
    setErrorMsg("");

    try {
      const uploadRes = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: preview, folder: "gallery" }),
      });
      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        setErrorMsg(uploadData.message || "Upload failed.");
        setUploading(false);
        return;
      }

      await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: uploadData.url, caption }),
      });

      setFile(null);
      setPreview(null);
      setCaption("");
      loadImages();
    } catch {
      setErrorMsg("Something went wrong.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <Heading as="h1" gradient>
        Gallery
      </Heading>

      <div className="card mt-4 space-y-3">
        <input type="file" accept="image/*" className="input" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Caption (optional)"
          className="input"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        {preview && (
          <img src={preview} alt="Preview" className="rounded" style={{ maxHeight: "200px" }} />
        )}
        <Button variant="primary" onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Add to Gallery"}
        </Button>
        {errorMsg && (
          <p className="text-sm" style={{ color: "#EF4444" }}>
            {errorMsg}
          </p>
        )}
      </div>

      {loading && <p className="mt-4 text-muted">Loading...</p>}

      <div className="mt-4 grid-3">
        {images.map((img) => (
          <div key={img.id} className="card">
            <img
              src={img.image_url}
              alt={img.caption || "Gallery image"}
              className="rounded"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            {img.caption && <p className="mt-2 text-secondary">{img.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
