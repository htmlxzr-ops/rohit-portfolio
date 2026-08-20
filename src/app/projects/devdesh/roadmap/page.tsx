import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const done = [
  "Global, Group, and 1-to-1 encrypted chat",
  "Encrypted WebRTC audio/video calls",
  "Posts with code, photo, text, and video categories",
  "Reels",
  "Community spaces",
  "GitHub integration for developer tools",
];

const upcoming = [
  "Performance and scale improvements",
  "Expanded developer tool integrations",
  "Additional polish across the social and messaging experience",
];

export default function DevdeshRoadmapPage() {
  return (
    <Section className="py-section">
      <span className="badge mb-2 inline-flex">~80% Complete</span>

      <Heading as="h1" gradient>
        Roadmap
      </Heading>
      <p className="mt-2 max-w-2xl">
        Where Devdesh stands today, and what&apos;s still ahead.
      </p>

      <div className="mt-4 grid-2">
        <div className="card">
          <h4 className="text-primary">Completed</h4>
          <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
            {done.map((item) => (
              <li key={item} className="text-secondary mt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h4 className="text-accent">In Progress / Upcoming</h4>
          <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
            {upcoming.map((item) => (
              <li key={item} className="text-secondary mt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
