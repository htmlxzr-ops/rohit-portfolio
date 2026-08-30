import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function AboutPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        About Me
      </Heading>

      <div className="mt-4 max-w-3xl space-y-4">
        <div>
          <h3 className="text-primary">Who I Am</h3>
          <p className="mt-2">
            I&apos;m Rohit Alam, a student and self-taught Full Stack
            Developer. I did not learn to code through a formal
            computer science program — everything I know today comes from
            building real projects, reading documentation, debugging late
            into the night, and slowly turning confusion into
            understanding. That path has shaped how I approach every
            project I take on: I would rather understand a system deeply
            than memorize a shortcut.
          </p>
        </div>

        <div>
          <h3 className="text-primary">What I Do</h3>
          <p className="mt-2">
            My core focus is full stack web development — building
            complete applications from the database layer up through the
            user interface. I work across the stack because I believe a
            developer who understands both sides builds more thoughtful
            software: someone who only writes frontend code often
            underestimates what the backend has to handle, and someone
            who only writes backend code often loses sight of how a real
            person experiences the product.
          </p>
          <p className="mt-2">
            Alongside web development, I&apos;m currently learning
            Python, which I&apos;m applying to backend logic, automation,
            and scripting. I also have a strong, self-taught foundation
            in cyber security. I did not approach security as an
            afterthought bolted onto finished projects — I studied it
            because I wanted to understand how systems actually fail, so
            that the systems I build don&apos;t.
          </p>
        </div>

        <div>
          <h3 className="text-primary">What I&apos;m Building</h3>
          <p className="mt-2">
            Most of my time right now goes into{" "}
            <span className="text-primary" style={{ fontWeight: 600 }}>
              Devdesh
            </span>
            , a platform I&apos;m building that combines end-to-end
            encrypted messaging with a social and developer ecosystem.
            It supports three distinct ways of communicating — global
            chat, group chat, and one-to-one chat — and every one of them
            is encrypted, including the WebRTC audio and video calls that
            run across all three. On top of the messaging layer, Devdesh
            includes a content system for posts (spanning code, photos,
            text, and video), short-form Reels, Community spaces, and
            developer tools with GitHub integration. It is currently
            around 80% complete.
          </p>
          <p className="mt-2">
            I&apos;m also building{" "}
            <span className="text-primary" style={{ fontWeight: 600 }}>
              Chat-Winner
            </span>
            , a separate project with a narrower, more focused goal: a
            dedicated messaging application built around channels,
            one-to-one messaging, and group chat, with WebRTC media
            calls. Where Devdesh is broad, Chat-Winner is deliberately
            narrow — it exists to do one thing well.
          </p>
        </div>

        <div>
          <h3 className="text-primary">How I Think About Security</h3>
          <p className="mt-2">
            Security is not something I add once a project is &quot;done.&quot;
            It&apos;s part of how I plan a system from the very first
            decision — how authentication will work, how data will be
            encrypted, how an API will reject the requests it should
            reject. This site itself reflects that: the admin system,
            the login flow, and the contact form are all built with
            rate limiting, hashed passwords, and verified email flows,
            not because a checklist told me to, but because I think
            about what could go wrong before I think about what should
            go right.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Why This Site Exists</h3>
          <p className="mt-2">
            This portfolio is not just a static resume — it is itself a
            working full stack application, built and rebuilt in public,
            with real authentication, a real database, a real admin
            panel, and real infrastructure decisions behind it. I built
            it the same way I build everything else: piece by piece,
            fixing what breaks, and treating every bug as something
            worth actually understanding rather than just patching over.
          </p>
        </div>
      </div>
    </Section>
  );
}
