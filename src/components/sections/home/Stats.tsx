import Section from "@/components/common/Section";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Stats() {
  const stats = [
    { label: "Active Projects", value: projects.length },
    { label: "Core Skills", value: skills.length },
    { label: "Devdesh Progress", value: "80%" },
    { label: "Encrypted Chat Modes", value: 3 },
  ];

  return (
    <Section className="py-4">
      <div className="grid-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card" style={{ textAlign: "center" }}>
            <p className="text-primary" style={{ fontSize: "2rem", fontWeight: 700 }}>
              {stat.value}
            </p>
            <small className="text-muted">{stat.label}</small>
          </div>
        ))}
      </div>
    </Section>
  );
}
