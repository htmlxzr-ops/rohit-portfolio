"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

interface GalleryImage {
  id: number;
  image_url: string;
  caption: string | null;
  cloudinary_id: string | null;
  created_at: string;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

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
        body: JSON.stringify({ imageUrl: uploadData.url, caption, cloudinaryId: uploadData.publicId }),
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

  async function handleDelete(id: number) {
    if (!confirm("Delete this image permanently?")) return;
    setDeletingId(id);
    try {
      await fetch("/api/admin/gallery", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setImages((prev) => prev.filter((img) => img.id !== id));
      if (lightbox?.id === id) setLightbox(null);
    } finally {
      setDeletingId(null);
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
            <div
              onClick={() => setLightbox(img)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={img.image_url}
                alt={img.caption || "Gallery image"}
                className="rounded"
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            </div>
            {img.caption && <p className="mt-2 text-secondary">{img.caption}</p>}
            <div className="mt-2 flex-between">
              <small className="text-muted">
                {new Date(img.created_at).toLocaleDateString()}
              </small>
              <button
                onClick={() => handleDelete(img.id)}
                disabled={deletingId === img.id}
                className="text-sm"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444" }}
              >
                {deletingId === img.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <img
            src={lightbox.image_url}
            alt={lightbox.caption || "Gallery image"}
            style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: "12px" }}
          />
          {lightbox.caption && (
            <p className="mt-3 text-secondary" style={{ textAlign: "center" }}>{lightbox.caption}</p>
          )}
          <small className="text-muted mt-1">
            {new Date(lightbox.created_at).toLocaleString()}
          </small>
        </div>
      )}
    </div>
  );
}
