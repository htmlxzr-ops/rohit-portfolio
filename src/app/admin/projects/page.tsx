import Heading from "@/components/common/Heading";
import { projects } from "@/data/projects";

export default function AdminProjectsPage() {
  return (
    <div>
      <Heading as="h1" gradient>
        Projects
      </Heading>
      <p className="mt-2 text-secondary">
        Managed in code (src/data/projects.ts). Edit that file to update progress or add new projects.
      </p>

      <div className="mt-4 space-y-3">
        {projects.map((project) => (
          <div key={project.slug} className="card">
            <div className="flex-between">
              <h4>{project.title}</h4>
              <span className="badge">{project.status}</span>
            </div>
            <p className="mt-1 text-secondary">{project.description}</p>
            <div className="mt-2 flex-between">
              <small className="text-muted">Progress</small>
              <small className="text-primary">{project.progress}%</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
