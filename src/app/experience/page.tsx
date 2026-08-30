import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const experience = [
  {
    title: "Self-Taught Full Stack Developer",
    period: "Ongoing",
    description:
      "My development experience has come entirely from building real, working projects rather than a formal course or classroom setting. I learn by starting a project, running into a problem I don't understand, and not moving on until I actually understand why it happened and how to fix it properly — not just patch it. Over time, that habit is what turned scattered pieces of knowledge into an actual working understanding of full stack development.",
  },
  {
    title: "Building Devdesh",
    period: "Ongoing · ~80% complete",
    description:
      "Devdesh has been the project where I've applied and stress-tested the most of what I know — real-time systems with Socket.io, encrypted messaging across three chat modes, WebRTC media calls, a social content layer with posts and Reels, and GitHub-integrated developer tools. Getting the encrypted messaging and calling layers working reliably taught me far more about real-time architecture than any tutorial could have.",
  },
  {
    title: "Building Chat-Winner",
    period: "Ongoing",
    description:
      "Chat-Winner is a separate, more focused messaging application — channels, one-to-one messaging, and group chat, with WebRTC calls across all of them. Building it alongside Devdesh has been useful in its own way: it forces me to think about messaging infrastructure without the distraction of a full social platform around it.",
  },
  {
    title: "This Portfolio",
    period: "Ongoing",
    description:
      "This site is itself a real full stack build, not just a static page describing my work. It has a PostgreSQL database, a full authentication system with email verification and rate limiting, an admin panel with image uploads through Cloudinary, and a contact system with spam protection — all built, broken, debugged, and rebuilt in the process of making it live.",
  },
  {
    title: "Learning Python & Cyber Security",
    period: "Ongoing",
    description:
      "I'm building a working knowledge of Python for backend logic and automation, and a self-taught foundation in cyber security focused on understanding how systems actually get attacked — authentication bypasses, injection, insecure file handling — so that the systems I build are designed to resist them from the start rather than patched after the fact.",
  },
];

export default function ExperiencePage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Experience
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        As a student and self-taught developer, my experience comes from
        building real projects and continuously learning — here&apos;s
        where that time has actually gone.
      </p>

      <div className="mt-4 max-w-3xl space-y-3">
        {experience.map((item) => (
          <div key={item.title} className="card">
            <div className="flex-between">
              <h4>{item.title}</h4>
              <small className="text-muted">{item.period}</small>
            </div>
            <p className="mt-2 text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
