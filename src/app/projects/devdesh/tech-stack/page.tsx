import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const stack = [
  { category: "Frontend", items: ["React"] },
  { category: "Backend", items: ["Node.js"] },
  { category: "Database", items: ["PostgreSQL"] },
  { category: "Real-Time", items: ["Socket.io"] },
  { category: "Media & Calls", items: ["WebRTC"] },
];

export default function DevdeshTechStackPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Tech Stack
      </Heading>
      <p className="mt-2 max-w-2xl">
        The technologies powering Devdesh, chosen for reliability at scale
        and real-time performance.
      </p>

      <div className="mt-4 grid-3">
        {stack.map((group) => (
          <div key={group.category} className="card">
            <h4>{group.category}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
