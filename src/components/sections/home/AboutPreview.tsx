import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function AboutPreview() {
  return (
    <Section className="py-section">
      <div className="grid-2" style={{ alignItems: "center" }}>
        <div>
          <Heading as="h2" gradient>
            About Me
          </Heading>
          <p className="mt-2 text-secondary">
            I&apos;m a student and self-taught Full Stack Developer,
            learning Python and building a strong foundation in Cyber
            Security. I build things secure by design — not as an
            afterthought.
          </p>
          <div className="mt-3">
            <Link href="/about">
              <Button variant="outline">Read More</Button>
            </Link>
          </div>
        </div>
        <div className="card">
          <p className="text-secondary">
            Most of my time goes into building <span className="text-primary">Devdesh</span> — an
            encrypted messaging and social platform — and{" "}
            <span className="text-primary">Chat-Winner</span>, a dedicated advanced
            messaging application.
          </p>
        </div>
      </div>
    </Section>
  );
}
