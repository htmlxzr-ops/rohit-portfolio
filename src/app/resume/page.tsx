import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function ResumePage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Resume
      </Heading>
      <p className="mt-2 max-w-xl">
        A quick summary of who I am and what I do. A downloadable PDF
        version is coming soon.
      </p>

      <div className="mt-4 max-w-2xl space-y-3">
        <div className="card">
          <h4>Full Stack Developer</h4>
          <p className="mt-1 text-secondary">
            Self-taught, currently a student, building production-grade web
            applications with a focus on security and real-time systems.
          </p>
        </div>

        <div className="card">
          <h4>Core Skills</h4>
          <p className="mt-1 text-secondary">
            Full Stack Web Development, Python (learning), Cyber Security
          </p>
        </div>

        <div className="card">
          <h4>Key Projects</h4>
          <p className="mt-1 text-secondary">
            Devdesh — encrypted messaging &amp; social platform (~80%
            complete) · Chat-Winner — advanced messaging application
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Button variant="gold" disabled>
          Download PDF (Coming Soon)
        </Button>
      </div>
    </Section>
  );
}
