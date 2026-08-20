import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const experience = [
  {
    title: "Self-Taught Full Stack Developer",
    period: "Ongoing",
    description:
      "Learning and building independently — mastering modern web development through hands-on projects rather than formal coursework alone.",
  },
  {
    title: "Building Devdesh",
    period: "Ongoing · ~80% complete",
    description:
      "Designing and developing a full-scale platform with end-to-end encrypted messaging, WebRTC calls, social features, and developer tools.",
  },
  {
    title: "Building Chat-Winner",
    period: "Ongoing",
    description:
      "Developing a dedicated advanced messaging application with channels, group chat, and WebRTC media calls.",
  },
  {
    title: "Learning Python & Cyber Security",
    period: "Ongoing",
    description:
      "Studying Python for backend and automation, and building a strong self-taught foundation in cyber security principles and practices.",
  },
];

export default function ExperiencePage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Experience
      </Heading>
      <p className="mt-2 max-w-xl">
        As a student and self-taught developer, my experience comes from
        building real projects and continuously learning.
      </p>

      <div className="mt-4 space-y-3">
        {experience.map((item) => (
          <div key={item.title} className="card">
            <div className="flex-between">
              <h4>{item.title}</h4>
              <small className="text-muted">{item.period}</small>
            </div>
            <p className="mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
