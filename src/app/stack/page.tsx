import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const stacks = [
  {
    project: "This Portfolio",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL (Neon)", "Cloudinary", "JWT + bcrypt", "Nodemailer"],
  },
  {
    project: "Devdesh",
    items: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC"],
  },
  {
    project: "Chat-Winner",
    items: ["WebRTC", "Real-time messaging infrastructure"],
  },
];

export default function StackPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Tech Stack
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        The technologies behind this site and my active projects.
      </p>

      <div className="mt-4 max-w-2xl space-y-4">
        {stacks.map((stack) => (
          <div key={stack.project} className="card">
            <h4>{stack.project}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {stack.items.map((item) => (
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
