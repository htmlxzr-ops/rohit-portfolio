"use client";

import { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

interface GalleryImage {
  id: number;
  image_url: string;
  caption: string | null;
  created_at: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data.images || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Gallery
      </Heading>
      <p className="mt-2 max-w-xl">
        Screenshots and visuals from Devdesh, Chat-Winner, and other work.
      </p>

      {loading && <p className="mt-4 text-muted">Loading...</p>}

      {!loading && images.length === 0 && (
        <p className="mt-4 text-muted">No images yet — coming soon.</p>
      )}

      <div className="mt-4 grid-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="card"
            onClick={() => setLightbox(img)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={img.image_url}
              alt={img.caption || "Gallery image"}
              className="rounded"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            {img.caption && <p className="mt-2 text-secondary">{img.caption}</p>}
            <small className="text-muted">
              {new Date(img.created_at).toLocaleDateString()}
            </small>
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
    </Section>
  );
}
