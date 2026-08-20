import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const entries = [
  {
    version: "Latest",
    changes: [
      "Encrypted Global, Group, and 1-to-1 chat systems",
      "Encrypted WebRTC audio/video calls across all chat types",
      "Posts with code, photo, text, and video categories",
      "Reels and Community spaces",
      "GitHub integration for developer tools",
    ],
  },
];

export default function DevdeshChangelogPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Changelog
      </Heading>
      <p className="mt-2 max-w-2xl">
        A running log of what&apos;s been built in Devdesh so far.
      </p>

      <div className="mt-4 space-y-3">
        {entries.map((entry) => (
          <div key={entry.version} className="card">
            <span className="badge">{entry.version}</span>
            <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
              {entry.changes.map((change) => (
                <li key={change} className="text-secondary mt-1">
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
