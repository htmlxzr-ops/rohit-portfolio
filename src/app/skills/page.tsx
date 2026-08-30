import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function SkillsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Skills
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        A look at what I work with, how I think about each area, and why
        it matters to the kind of software I build.
      </p>

      <div className="mt-4 max-w-3xl space-y-4">
        <div className="card">
          <div className="flex-between">
            <h3 className="text-primary">Full Stack Web Development</h3>
            <span className="badge">Advanced</span>
          </div>
          <p className="mt-2 text-secondary">
            This is where most of my hands-on experience lives. I work
            across the entire stack — building the database structure,
            writing the backend logic and APIs that sit on top of it, and
            building the frontend interfaces people actually interact
            with. This portfolio itself is an example: it has a real
            PostgreSQL database, authentication with hashed passwords and
            JWT sessions, an admin panel with image uploads, and a public
            frontend, all built and wired together end to end. I&apos;ve
            worked with React, Next.js, and Node.js in real projects like
            Devdesh and Chat-Winner, where the backend has to handle
            real-time messaging, encryption, and media calls — not just
            simple CRUD operations.
          </p>
        </div>

        <div className="card">
          <div className="flex-between">
            <h3 className="text-primary">Python</h3>
            <span className="badge">Learning</span>
          </div>
          <p className="mt-2 text-secondary">
            I&apos;m currently learning Python, focusing on backend logic,
            scripting, and automation. I&apos;m early in this journey
            compared to my web development experience, but I&apos;m
            applying it deliberately rather than just studying syntax in
            isolation — the goal is to be able to reach for Python when
            it&apos;s the right tool for a task, not just when it&apos;s
            the one I know best.
          </p>
        </div>

        <div className="card">
          <div className="flex-between">
            <h3 className="text-primary">Cyber Security</h3>
            <span className="badge">Advanced</span>
          </div>
          <p className="mt-2 text-secondary">
            My knowledge of cyber security is self-taught, built through
            deliberate study rather than a course or certification path.
            I&apos;ve focused on understanding how real systems get
            broken into — authentication bypasses, injection attacks,
            insecure file handling, poorly designed rate limits — because
            understanding the attack is what makes the defense
            meaningful. In practice, this shows up directly in how I
            build: passwords are always hashed, never stored in plain
            text; authentication uses signed, short-lived tokens; login,
            registration, and OTP verification are all rate-limited
            against brute force; and file uploads are validated and
            routed through isolated storage rather than the app server
            itself. I go into more detail on these principles on the{" "}
            <a href="/security" className="text-primary">
              Security
            </a>{" "}
            page.
          </p>
        </div>
      </div>
    </Section>
  );
}
