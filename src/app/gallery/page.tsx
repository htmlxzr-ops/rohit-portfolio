import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await sql`SELECT * FROM gallery ORDER BY created_at DESC`;

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Gallery
      </Heading>
      <p className="mt-2 max-w-xl">
        Screenshots and visuals from Devdesh, Chat-Winner, and other work.
      </p>

      {images.length === 0 ? (
        <p className="mt-4 text-muted">No images yet — coming soon.</p>
      ) : (
        <div className="mt-4 grid-3">
          {images.map((img) => (
            <div key={img.id} className="card">
              <img
                src={img.image_url}
                alt={img.caption || "Gallery image"}
                className="rounded"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              {img.caption && <p className="mt-2 text-secondary">{img.caption}</p>}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
