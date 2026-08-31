import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const endpoints = [
  { method: "POST", path: "/api/auth/register", desc: "Creates an unverified account and sends a 6-digit OTP to the given email. Rate-limited." },
  { method: "POST", path: "/api/auth/verify", desc: "Verifies an account using the OTP sent during registration. Rate-limited." },
  { method: "POST", path: "/api/auth/resend-otp", desc: "Sends a new OTP to an unverified account, subject to a 60-second cooldown." },
  { method: "POST", path: "/api/auth/login", desc: "Authenticates a verified user and issues a signed session cookie. Rate-limited." },
  { method: "POST", path: "/api/auth/logout", desc: "Clears the session cookie." },
  { method: "GET", path: "/api/auth/me", desc: "Returns the currently authenticated user, if any." },
  { method: "POST", path: "/api/contact", desc: "Stores a contact message and emails a notification. Rate-limited." },
  { method: "GET / POST", path: "/api/admin/blogs", desc: "Lists or creates blog posts. Admin-only." },
  { method: "GET / POST", path: "/api/admin/gallery", desc: "Lists or adds gallery images. Admin-only." },
  { method: "GET / PATCH", path: "/api/admin/messages", desc: "Lists contact messages or marks one as read. Admin-only." },
  { method: "POST", path: "/api/admin/upload", desc: "Uploads an image to Cloudinary. Admin-only." },
  { method: "POST", path: "/api/track", desc: "Logs a page visit for analytics." },
];

export default function ApiDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        API Reference
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        Every route this site exposes. Admin-only routes independently
        verify the caller&apos;s role server-side, regardless of how
        they&apos;re called.
      </p>

      <div className="mt-4 max-w-2xl space-y-2">
        {endpoints.map((ep) => (
          <div key={ep.path} className="card">
            <div className="flex-between">
              <code className="text-primary">{ep.path}</code>
              <span className="badge">{ep.method}</span>
            </div>
            <p className="mt-2 text-secondary">{ep.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
