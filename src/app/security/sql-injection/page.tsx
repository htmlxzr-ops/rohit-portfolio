import { notFound } from "next/navigation";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { securityTopics } from "@/data/security-topics";

export default function SecurityTopicPage() {
  const topic = securityTopics.find((t) => t.slug === "sql-injection");
  if (!topic) notFound();

  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        {topic.title}
      </Heading>
      <p className="mt-2 max-w-2xl">{topic.summary}</p>

      <ul className="mt-4" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
        {topic.points.map((point) => (
          <li key={point} className="text-secondary mt-2">
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
}
