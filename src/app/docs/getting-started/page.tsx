import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function GettingStartedDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Getting Started
      </Heading>

      <div className="mt-4 max-w-2xl space-y-4">
        <div>
          <h3 className="text-primary">What This Is</h3>
          <p className="mt-2 text-secondary">
            This site is a Next.js application using the App Router,
            written in TypeScript, styled with Tailwind CSS, and backed
            by a PostgreSQL database on Neon. It&apos;s structured as a
            standard Next.js project: pages live under{" "}
            <code>src/app</code>, reusable UI lives under{" "}
            <code>src/components</code>, and shared logic — the
            database client, authentication helpers, rate limiter, and
            email sender — lives under <code>src/lib</code>.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Key Directories</h3>
          <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
            <li className="text-secondary mt-1"><code>src/app/api</code> — every backend API route, organized by feature</li>
            <li className="text-secondary mt-1"><code>src/app/admin</code> — the admin panel, protected by a server-side layout check</li>
            <li className="text-secondary mt-1"><code>src/lib/db</code> — the Neon Postgres client used across the app</li>
            <li className="text-secondary mt-1"><code>src/lib/auth</code> — session and role-checking logic</li>
            <li className="text-secondary mt-1"><code>src/lib/rate-limit</code> — the custom rate limiter backing auth and contact endpoints</li>
            <li className="text-secondary mt-1"><code>src/data</code> — static content: skills, projects, and security topics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary">Where to Go Next</h3>
          <p className="mt-2 text-secondary">
            The{" "}
            <a href="/docs/architecture" className="text-primary">
              Architecture
            </a>{" "}
            page explains how these pieces fit together end to end, and
            the{" "}
            <a href="/docs/api" className="text-primary">
              API Reference
            </a>{" "}
            documents every route this site exposes.
          </p>
        </div>
      </div>
    </Section>
  );
}
