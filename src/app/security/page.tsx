import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { securityTopics } from "@/data/security-topics";

export default function SecurityPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Security
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        Cyber security is at the core of how I build. This isn&apos;t a
        list of buzzwords — every topic below ties directly to a decision
        actually made somewhere in this site&apos;s own code, from how
        passwords are hashed to how the admin panel checks who&apos;s
        allowed in.
      </p>

      <div className="mt-4 grid-3">
        {securityTopics.map((topic) => (
          <Link key={topic.slug} href={`/security/${topic.slug}`} className="card hover-lift">
            <h4>{topic.title}</h4>
            <p className="mt-1 text-secondary">{topic.intro}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
