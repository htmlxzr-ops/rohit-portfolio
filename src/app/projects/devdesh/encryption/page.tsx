import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const channels = [
  {
    title: "Global Chat",
    description:
      "Messages exchanged in the global chat are encrypted, keeping conversations protected across the entire platform.",
  },
  {
    title: "Group Chat",
    description:
      "Every group conversation is encrypted, ensuring only members of the group can read the messages exchanged.",
  },
  {
    title: "1-to-1 Chat",
    description:
      "Direct messages use end-to-end encryption, so only the two participants can ever read what's sent.",
  },
  {
    title: "WebRTC Calls",
    description:
      "Audio and video calls across all chat types are encrypted, keeping live conversations as protected as text messages.",
  },
];

export default function DevdeshEncryptionPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Encryption
      </Heading>
      <p className="mt-2 max-w-2xl">
        Every mode of communication in Devdesh is encrypted — nothing is
        left as an afterthought.
      </p>

      <div className="mt-4 grid-2">
        {channels.map((channel) => (
          <div key={channel.title} className="card">
            <h4>{channel.title}</h4>
            <p className="mt-1 text-secondary">{channel.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
