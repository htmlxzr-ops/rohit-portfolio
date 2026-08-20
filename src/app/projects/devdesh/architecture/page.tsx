import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const layers = [
  {
    title: "Frontend",
    tech: "React",
    description:
      "Handles the user interface — chat screens, social feed, community spaces, and developer tools — with real-time updates reflected instantly.",
  },
  {
    title: "Backend",
    tech: "Node.js",
    description:
      "Powers the core application logic, authentication, API endpoints, and coordinates real-time events between clients.",
  },
  {
    title: "Database",
    tech: "PostgreSQL",
    description:
      "Stores users, messages metadata, posts, and relationships between them with strong consistency guarantees.",
  },
  {
    title: "Real-Time Layer",
    tech: "Socket.io",
    description:
      "Delivers Global, Group, and 1-to-1 chat messages instantly between connected clients.",
  },
  {
    title: "Media Layer",
    tech: "WebRTC",
    description:
      "Handles peer-to-peer audio/video calls across all chat types, with encryption applied end-to-end.",
  },
];

export default function DevdeshArchitecturePage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Architecture
      </Heading>
      <p className="mt-2 max-w-2xl">
        Devdesh is built as a layered system — each part handles one
        responsibility clearly, keeping the platform maintainable as it
        grows.
      </p>

      <div className="mt-4 space-y-3">
        {layers.map((layer) => (
          <div key={layer.title} className="card">
            <div className="flex-between">
              <h4>{layer.title}</h4>
              <span className="badge">{layer.tech}</span>
            </div>
            <p className="mt-1 text-secondary">{layer.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
