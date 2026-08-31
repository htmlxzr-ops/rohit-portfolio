import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const docs = [
  { slug: "getting-started", title: "Getting Started", description: "How this site is structured and how to navigate its codebase." },
  { slug: "architecture", title: "Architecture", description: "How the frontend, backend, database, and auth system fit together." },
  { slug: "api", title: "API Reference", description: "The API routes this site exposes, and what each one does." },
  { slug: "security", title: "Security Practices", description: "A technical summary of the security decisions behind this build." },
  { slug: "deployment", title: "Deployment", description: "How this site is built and deployed to production." },
  { slug: "devdesh", title: "Devdesh Docs", description: "Technical notes specific to the Devdesh platform." },
];

export default function DocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Documentation
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        Technical documentation for this site and my active projects —
        written the same way I&apos;d document a real production system.
      </p>

      <div className="mt-4 grid-2">
        {docs.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`} className="card hover-lift">
            <h4>{doc.title}</h4>
            <p className="mt-1 text-secondary">{doc.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
