import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { skills } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <Section className="py-section">
      <div className="flex-between">
        <Heading as="h2" gradient>
          Skills
        </Heading>
        <Link href="/skills" className="text-primary text-sm">
          View All →
        </Link>
      </div>

      <div className="mt-4 grid-3">
        {skills.map((skill) => (
          <div key={skill.name} className="card">
            <p style={{ fontWeight: 600 }}>{skill.name}</p>
            <small className="text-muted">{skill.level}</small>
          </div>
        ))}
      </div>
    </Section>
  );
}
