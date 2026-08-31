import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const layers = [
  { name: "Frontend", detail: "React components rendered through Next.js's App Router, styled with Tailwind CSS. Server components handle data fetching where possible; client components handle interactivity like forms and the admin dashboard." },
  { name: "API Layer", detail: "Route handlers under src/app/api, each independently validating input and — where relevant — checking the caller's session and role before touching the database." },
  { name: "Authentication", detail: "Passwords are hashed with bcrypt. Sessions are signed JWTs stored in httpOnly cookies. Registration requires email OTP verification before login is allowed." },
  { name: "Database", detail: "PostgreSQL, hosted on Neon, accessed through its serverless HTTP driver rather than a persistent connection pool — a deliberate choice for a serverless deployment target like Vercel." },
  { name: "File Storage", detail: "Images uploaded through the admin panel are sent to Cloudinary rather than stored on the application server, keeping the app itself stateless." },
  { name: "Email", detail: "Nodemailer, using Gmail as the SMTP provider, handles OTP delivery and contact form notifications." },
];

export default function ArchitectureDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Architecture
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        This site is built as a set of independent layers, each with one
        job — which made it possible to build, break, and fix pieces of
        it independently as it grew.
      </p>

      <div className="mt-4 max-w-2xl space-y-3">
        {layers.map((layer) => (
          <div key={layer.name} className="card">
            <h4 className="text-primary">{layer.name}</h4>
            <p className="mt-2 text-secondary">{layer.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
