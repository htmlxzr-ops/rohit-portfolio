import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function ProjectsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Projects
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        The two projects I&apos;m actively building, what they do, and
        why they&apos;re built the way they are.
      </p>

      <div className="mt-4 max-w-3xl space-y-4">
        <div className="card">
          <div className="flex-between">
            <h3 className="text-primary">Devdesh</h3>
            <span className="badge">~80% Complete</span>
          </div>

          <p className="mt-2 text-secondary">
            Devdesh is the larger of my two projects — a platform that
            combines encrypted messaging with a social and developer
            ecosystem. The messaging layer supports three separate modes:
            a global chat open to everyone on the platform, group chat
            for smaller circles, and one-to-one direct messages. Every
            one of these is end-to-end encrypted, and the WebRTC-based
            audio and video calls that run across all three modes carry
            the same encryption guarantee — a call in Devdesh is never
            less protected than a text message.
          </p>
          <p className="mt-2 text-secondary">
            Beyond messaging, Devdesh has a content layer built around
            posts — supporting code snippets, photos, plain text, and
            video in a single feed — alongside short-form Reels and
            dedicated Community spaces for groups with shared interests.
            For developers specifically, Devdesh integrates directly with
            GitHub, connecting a person&apos;s development work to their
            profile on the platform.
          </p>
          <p className="mt-2 text-secondary">
            Under the hood, Devdesh runs on React for the frontend,
            Node.js for the backend, PostgreSQL for data storage,
            Socket.io for real-time delivery of chat messages, and WebRTC
            for the peer-to-peer media layer. I go into more depth on
            each of these decisions on the project&apos;s{" "}
            <Link href="/projects/devdesh/architecture" className="text-primary">
              architecture
            </Link>{" "}
            page.
          </p>

          <div className="mt-2">
            <Link href="/projects/devdesh" className="text-primary text-sm">
              View full Devdesh project page →
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="flex-between">
            <h3 className="text-primary">Chat-Winner</h3>
            <span className="badge">Building</span>
          </div>

          <p className="mt-2 text-secondary">
            Chat-Winner is a deliberately narrower project than Devdesh.
            Where Devdesh tries to be a full ecosystem, Chat-Winner exists
            to do one thing well: messaging. It&apos;s built around
            channels — persistent, topic-based spaces — alongside
            one-to-one messaging and group chat, with WebRTC media calls
            available across all of them.
          </p>
          <p className="mt-2 text-secondary">
            Encryption across all of Chat-Winner&apos;s communication
            modes is currently being implemented. I&apos;m building it
            deliberately after the core messaging and channel
            infrastructure is stable, rather than retrofitting it later —
            the goal is for every mode to reach the same encrypted
            standard Devdesh already has for its chat systems.
          </p>
        </div>
      </div>
    </Section>
  );
}
