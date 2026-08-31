import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function DeploymentDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Deployment
      </Heading>

      <div className="mt-4 max-w-2xl space-y-4">
        <div>
          <h3 className="text-primary">Hosting</h3>
          <p className="mt-2 text-secondary">
            This site is deployed on Vercel, connected directly to its
            GitHub repository. Every push to the main branch triggers a
            new production build and deployment automatically.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Environment Variables</h3>
          <p className="mt-2 text-secondary">
            Secrets — the database connection string, JWT signing key,
            email credentials, and Cloudinary keys — are never committed
            to the repository. They&apos;re configured directly in
            Vercel&apos;s Environment Variables settings and injected at
            build and runtime.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Database</h3>
          <p className="mt-2 text-secondary">
            The production database runs on Neon, a serverless
            PostgreSQL provider. Its HTTP-based driver was chosen
            specifically because it works well with Vercel&apos;s
            serverless functions, which don&apos;t hold long-lived
            database connections the way a traditional server would.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Build Process</h3>
          <p className="mt-2 text-secondary">
            The site is built with Next.js&apos;s standard production
            build, which statically generates every page that
            doesn&apos;t need a database call at build time, and marks
            the rest — like the admin panel and blog pages — as
            server-rendered on demand.
          </p>
        </div>
      </div>
    </Section>
  );
}
