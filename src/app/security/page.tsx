import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const topics = [
  { slug: "authentication", title: "Authentication", description: "How identity is verified securely." },
  { slug: "authorization", title: "Authorization", description: "Controlling what authenticated users can access." },
  { slug: "encryption", title: "Encryption", description: "Protecting data in transit and at rest." },
  { slug: "jwt", title: "JWT", description: "Token-based authentication and its security considerations." },
  { slug: "xss", title: "XSS", description: "Preventing cross-site scripting attacks." },
  { slug: "csrf", title: "CSRF", description: "Guarding against cross-site request forgery." },
  { slug: "sql-injection", title: "SQL Injection", description: "Defending against malicious database queries." },
  { slug: "rate-limit", title: "Rate Limiting", description: "Protecting APIs from abuse and brute force." },
  { slug: "file-security", title: "File Security", description: "Safe handling of file uploads and storage." },
  { slug: "api-security", title: "API Security", description: "Hardening APIs against common attack vectors." },
];

export default function SecurityPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Security
      </Heading>
      <p className="mt-2 max-w-xl">
        Cyber security is at the core of how I build — here&apos;s a look at
        the principles and practices I apply.
      </p>

      <div className="mt-4 grid-3">
        {topics.map((topic) => (
          <Link key={topic.slug} href={`/security/${topic.slug}`} className="card hover-lift">
            <h4>{topic.title}</h4>
            <p className="mt-1 text-secondary">{topic.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
