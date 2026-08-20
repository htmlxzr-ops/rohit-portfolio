import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function AboutPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        About Me
      </Heading>

      <div className="mt-3 max-w-2xl space-y-3">
        <p>
          I&apos;m Rohit Alam, a student and self-taught Full Stack Developer.
          I build modern web applications end-to-end — from the frontend
          experience down to the backend systems that power them.
        </p>

        <p>
          Alongside web development, I&apos;m learning Python and have
          developed a strong, self-taught foundation in Cyber Security —
          understanding how systems can be attacked helps me build ones that
          are genuinely secure.
        </p>

        <p>
          Most of my time goes into building{" "}
          <span className="text-primary" style={{ fontWeight: 600 }}>
            Devdesh
          </span>
          , a platform combining end-to-end encrypted messaging with a
          social and developer ecosystem, and{" "}
          <span className="text-primary" style={{ fontWeight: 600 }}>
            Chat-Winner
          </span>
          , a dedicated advanced messaging application.
        </p>

        <p>
          I care about building things that are secure by design, not as an
          afterthought — encryption, authentication, and data protection are
          part of how I plan a project from day one.
        </p>
      </div>
    </Section>
  );
}
