import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const faqs = [
  {
    q: "What is this site?",
    a: "This is my personal portfolio — a full stack application I built myself, showcasing my projects, skills, and how I think about building secure software.",
  },
  {
    q: "What is Devdesh?",
    a: "Devdesh is my main project — a platform combining end-to-end encrypted messaging (global, group, and one-to-one chat, plus WebRTC calls) with a social and developer ecosystem. It's currently around 80% complete. More detail is on the Devdesh project page.",
  },
  {
    q: "What is Chat-Winner?",
    a: "Chat-Winner is a separate, more focused messaging application built around channels, one-to-one messaging, and group chat with WebRTC calls. Encryption across all its modes is currently being implemented.",
  },
  {
    q: "Are you a professional developer, or a student?",
    a: "Both — I'm a student and a self-taught Full Stack Developer. Everything I know comes from building real projects rather than a formal course.",
  },
  {
    q: "What technologies do you use?",
    a: "Full stack web development is my core skill, I'm currently learning Python, and I have a strong self-taught foundation in cyber security. This site itself runs on Next.js, React, PostgreSQL, and Cloudinary.",
  },
  {
    q: "What's the point of creating an account here?",
    a: "You can create a free account with just an email and password. It's tied to future updates, like being notified about new content as that part of the site develops further.",
  },
  {
    q: "Is Devdesh available to try yet?",
    a: "Not yet — it's around 80% complete. You can follow its progress on the Devdesh roadmap page.",
  },
  {
    q: "How can I get in touch?",
    a: "The fastest way is the contact form. I'm also reachable through the social links in the footer.",
  },
];

export default function FaqPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Frequently Asked Questions
      </Heading>

      <div className="mt-4 max-w-2xl space-y-3">
        {faqs.map((item) => (
          <div key={item.q} className="card">
            <h4>{item.q}</h4>
            <p className="mt-2 text-secondary">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
