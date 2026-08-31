import Link from "next/link";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function DevdeshDocsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Devdesh Docs
      </Heading>
      <p className="mt-2 max-w-2xl text-secondary">
        Technical notes on Devdesh. For the full project overview, see
        the main{" "}
        <Link href="/projects/devdesh" className="text-primary">
          Devdesh project page
        </Link>
        .
      </p>

      <div className="mt-4 max-w-2xl space-y-3">
        <div className="card">
          <h4 className="text-primary">Stack</h4>
          <p className="mt-2 text-secondary">React on the frontend, Node.js on the backend, PostgreSQL for storage, Socket.io for real-time delivery, and WebRTC for peer-to-peer audio and video.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Messaging Modes</h4>
          <p className="mt-2 text-secondary">Three independent chat systems — global, group, and one-to-one — all end-to-end encrypted, delivered in real time through Socket.io.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Media Calls</h4>
          <p className="mt-2 text-secondary">WebRTC handles peer-to-peer audio and video across every chat type, carrying the same encryption guarantee as text messages.</p>
        </div>
        <div className="card">
          <h4 className="text-primary">Status</h4>
          <p className="mt-2 text-secondary">Roughly 80% complete. See the <Link href="/projects/devdesh/roadmap" className="text-primary">roadmap</Link> for what's done and what's still ahead.</p>
        </div>
      </div>
    </Section>
  );
}
