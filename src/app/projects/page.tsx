import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Projects
      </Heading>
      <p className="mt-2 max-w-xl">
        Things I&apos;m building — from encrypted messaging platforms to
        developer tools.
      </p>

      <div className="mt-4 space-y-4">
        {projects.map((project) => (
          <div key={project.slug} className="card">
            <div className="flex-between">
              <h3>{project.title}</h3>
              <span className="badge">{project.status}</span>
            </div>

            <p className="mt-1">{project.description}</p>

            <div className="mt-2">
              <div className="flex-between mb-1">
                <small>Progress</small>
                <small className="text-primary">{project.progress}%</small>
              </div>
              <div
                style={{
                  height: "8px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${project.progress}%`,
                    background:
                      "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>

            <ul className="mt-2" style={{ paddingLeft: "1.2rem", listStyle: "disc" }}>
              {project.features.map((feature) => (
                <li key={feature} className="text-secondary mt-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
