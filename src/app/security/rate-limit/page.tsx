import { notFound } from "next/navigation";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { securityTopics } from "@/data/security-topics";

export default function SecurityTopicPage() {
  const topic = securityTopics.find((t) => t.slug === "rate-limit");
  if (!topic) notFound();

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        {topic.title}
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">{topic.intro}</p>

      <div className="mt-4 max-w-2xl space-y-4">
        <div>
          <h3 className="text-primary">Why It Matters</h3>
          <p className="mt-2 text-secondary">{topic.whyItMatters}</p>
        </div>

        <div>
          <h3 className="text-primary">How I Apply It</h3>
          <p className="mt-2 text-secondary">{topic.howIApplyIt}</p>
        </div>

        <div>
          <h3 className="text-primary">Key Practices</h3>
          <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
            {topic.practices.map((point) => (
              <li key={point} className="text-secondary mt-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
