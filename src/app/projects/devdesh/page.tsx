import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const highlights = [
  {
    title: "End-to-End Encryption",
    description:
      "Global chat, group chat, and 1-to-1 chat are all encrypted, along with WebRTC audio/video calls across every mode.",
  },
  {
    title: "Real-Time Communication",
    description:
      "Three distinct chat systems — Global, Group, and 1-to-1 — each built for a different kind of conversation.",
  },
  {
    title: "Social Features",
    description:
      "Posts across code, photo, text, and video categories, plus Reels and Community spaces.",
  },
  {
    title: "Developer Tools",
    description:
      "GitHub integration built directly into the platform for developers using Devdesh.",
  },
];

export default function DevdeshPage() {
  return (
    <Section className="py-section">
      <span className="badge mb-2 inline-flex">~80% Complete</span>

      <Heading as="h1" gradient>
        Devdesh
      </Heading>

      <p className="mt-2 max-w-2xl">
        Devdesh is a flagship platform combining end-to-end encrypted
        messaging with a social and developer ecosystem — built from the
        ground up to be secure by design.
      </p>

      <div className="mt-4 grid-2">
        {highlights.map((item) => (
          <div key={item.title} className="card">
            <h4>{item.title}</h4>
            <p className="mt-1 text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
