import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function DevdeshGalleryPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Gallery
      </Heading>
      <p className="mt-2 max-w-xl">
        Screenshots from Devdesh — chat, posts, reels, and community —
        coming soon.
      </p>

      <div className="mt-4 grid-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="card skeleton" style={{ height: "200px" }} />
        ))}
      </div>
    </Section>
  );
}
