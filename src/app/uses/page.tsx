import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const categories = [
  {
    title: "Development Environment",
    items: [
      "This entire site — backend, database, authentication, admin panel — was built and deployed from Termux, running directly on Android. No desktop or laptop was involved in building it.",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Command-line driven: git, cat, sed, and npm inside Termux, rather than a GUI code editor",
      "Direct terminal-based debugging — reading build logs, tracing errors line by line, and fixing them in place",
    ],
  },
  {
    title: "Hosting & Infrastructure",
    items: [
      "Vercel — hosting and deployment",
      "Neon — serverless PostgreSQL database",
      "Cloudinary — image storage for blog covers and gallery uploads",
      "Gmail via Nodemailer — OTP emails and contact form delivery",
    ],
  },
  {
    title: "Framework & Language",
    items: [
      "Next.js (App Router) with React and TypeScript",
      "Tailwind CSS for styling",
      "Currently learning Python",
    ],
  },
];

export default function UsesPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Uses
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        What I actually build with — including the fact that this whole
        site was built entirely on a phone.
      </p>

      <div className="mt-4 max-w-2xl space-y-4">
        {categories.map((cat) => (
          <div key={cat.title} className="card">
            <h4>{cat.title}</h4>
            <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
              {cat.items.map((item) => (
                <li key={item} className="text-secondary mt-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
