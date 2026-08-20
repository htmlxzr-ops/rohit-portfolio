import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  return (
    <Section className="py-section">
      <div className="flex-between">
        <Heading as="h2" gradient>
          Featured Projects
        </Heading>
        <Link href="/projects" className="text-primary text-sm">
          View All →
        </Link>
      </div>

      <div className="mt-4 grid-2">
        {projects.map((project) => (
          <Link key={project.slug} href={project.slug === "devdesh" ? "/projects/devdesh" : "/projects"} className="card hover-lift">
            <div className="flex-between">
              <h4>{project.title}</h4>
              <span className="badge">{project.status}</span>
            </div>
            <p className="mt-1 text-secondary">{project.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
