import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const features = [
  {
    title: "Posts",
    description:
      "Share content across multiple categories — code snippets, photos, text updates, and videos — all in one feed.",
  },
  {
    title: "Reels",
    description:
      "Short-form video content for quick, engaging updates alongside the main feed.",
  },
  {
    title: "Community",
    description:
      "Dedicated spaces for groups of people to gather, discuss, and share around shared interests.",
  },
  {
    title: "Developer Tools",
    description:
      "GitHub integration built directly into the platform, connecting a developer's work to their profile.",
  },
  {
    title: "Global Chat",
    description:
      "A shared space for real-time conversation across the whole platform.",
  },
  {
    title: "Group Chat",
    description:
      "Real-time messaging for groups, encrypted and built for ongoing conversations.",
  },
  {
    title: "1-to-1 Chat",
    description:
      "Private, end-to-end encrypted direct messaging between two people.",
  },
  {
    title: "WebRTC Calls",
    description:
      "Encrypted audio and video calls available across every chat type.",
  },
];

export default function DevdeshFeaturesPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Features
      </Heading>
      <p className="mt-2 max-w-2xl">
        Everything Devdesh brings together — communication, social content,
        and developer tools in one platform.
      </p>

      <div className="mt-4 grid-3">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <h4>{feature.title}</h4>
            <p className="mt-1 text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
