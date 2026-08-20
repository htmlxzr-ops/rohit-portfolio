import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { skills, skillCategories } from "@/data/skills";

export default function SkillsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Skills
      </Heading>
      <p className="mt-2 max-w-xl">
        Technologies and domains I work with, learn, and specialize in.
      </p>

      <div className="mt-4 space-y-4">
        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mb-2">{category}</h3>
              <div className="grid-3">
                {items.map((skill) => (
                  <div key={skill.name} className="card">
                    <p className="text-primary" style={{ fontWeight: 600 }}>
                      {skill.name}
                    </p>
                    <small>{skill.level}</small>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
