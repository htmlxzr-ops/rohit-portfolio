import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const done = [
  "Full portfolio site with 80+ pages, covering projects, security, and documentation",
  "Complete authentication system: registration, email OTP verification, login, OTP resend, and rate limiting",
  "Admin panel: blog publishing, gallery management, message inbox, and visitor tracking",
  "Contact system with database storage, email delivery, and spam protection",
];

const upcoming = [
  "A downloadable PDF resume",
  "Growing the blog with real, ongoing writing",
  "Chat-Winner's encryption rollout across all chat modes",
  "Continued progress on Devdesh, and continued learning in Python and cyber security",
];

export default function RoadmapPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Roadmap
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        Where this site — and the work behind it — stands today.
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
          <h4 className="text-accent">Upcoming</h4>
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
