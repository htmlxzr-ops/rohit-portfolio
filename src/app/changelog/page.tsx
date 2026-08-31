import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const entries = [
  {
    version: "Latest",
    changes: [
      "Rate limiting added across login, registration, OTP verification, and the contact form",
      "OTP resend functionality with a cooldown timer",
      "Core pages and the Security section rewritten with detailed, documentary-style content",
    ],
  },
  {
    version: "Earlier",
    changes: [
      "Full authentication system: registration, email OTP verification, login, and role-based admin access",
      "Admin panel with Cloudinary-powered image uploads for blog posts and the gallery",
      "Visitor tracking across all pages",
    ],
  },
  {
    version: "Earlier",
    changes: [
      "Contact form with database storage and email delivery",
      "Complete Security documentation section covering authentication, encryption, and more",
    ],
  },
  {
    version: "Initial",
    changes: [
      "Homepage redesign with a dark, cyan-and-gold premium theme",
      "Navbar, hero section, and core site foundation",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Changelog
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        A running log of how this site has been built, piece by piece.
      </p>

      <div className="mt-4 max-w-2xl space-y-3">
        {entries.map((entry, i) => (
          <div key={i} className="card">
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
