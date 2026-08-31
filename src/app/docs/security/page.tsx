import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function SecurityDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Security Practices
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        A technical summary of the security decisions behind this site.
        For the full write-up on each topic, with reasoning and context,
        see the{" "}
        <a href="/security" className="text-primary">
          Security
        </a>{" "}
        section.
      </p>

      <div className="mt-4 max-w-2xl space-y-3">
        <div className="card">
          <h4 className="text-primary">Passwords</h4>
          <p className="mt-2 text-secondary">Hashed with bcrypt before storage. Never logged, never stored in plain text, never included in API responses.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Sessions</h4>
          <p className="mt-2 text-secondary">Signed JWTs in httpOnly, SameSite=Lax cookies. Seven-day expiry. Payload limited to user id, email, and role.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Rate Limiting</h4>
          <p className="mt-2 text-secondary">A custom Postgres-backed limiter applied to login, registration, OTP verification, OTP resend, and the contact form.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Authorization</h4>
          <p className="mt-2 text-secondary">Role checks (USER / ADMIN) enforced server-side at both the layout level and independently within every admin API route.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Database Access</h4>
          <p className="mt-2 text-secondary">All queries use parameterized, tagged-template SQL — never string concatenation, which rules out classic SQL injection.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">File Uploads</h4>
          <p className="mt-2 text-secondary">Accepted only via admin-authenticated routes, stored on Cloudinary rather than the application server itself.</p>
        </div>
      </div>
    </Section>
  );
}
