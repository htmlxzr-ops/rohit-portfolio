import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function PrivacyPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Privacy Policy
      </Heading>
      <p className="mt-2 text-secondary">Last updated: 2026</p>

      <div className="mt-4 max-w-2xl space-y-4">
        <div>
          <h3 className="text-primary">Information I Collect</h3>
          <p className="mt-2 text-secondary">
            If you create an account, I store your email address and a
            hashed version of your password — never the password itself
            in readable form. If you use the contact form, I store the
            name, email, and message you submit so I can read and reply
            to it. I also log basic visit data — the page path you
            visited and your browser&apos;s user agent — to get a general
            sense of which pages get traffic. I don&apos;t collect
            precise location data or run any third-party ad trackers.
          </p>
        </div>

        <div>
          <h3 className="text-primary">How I Use It</h3>
          <p className="mt-2 text-secondary">
            Account information exists to let you log in and to
            eventually support features tied to registered accounts.
            Contact form submissions exist so I can respond to you
            directly by email. Visit data is used only in aggregate, to
            understand which parts of the site are actually being read.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Third-Party Services</h3>
          <p className="mt-2 text-secondary">
            This site runs on Vercel for hosting, Neon for its
            PostgreSQL database, and Cloudinary for storing images
            uploaded through the admin panel. Emails — including
            verification codes and contact form notifications — are sent
            through Gmail via Nodemailer. None of these services are
            given more data than they need to perform their specific
            function.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Cookies</h3>
          <p className="mt-2 text-secondary">
            This site sets one cookie: an authentication token, issued
            only after you log in, used only to keep your session
            active. It&apos;s marked httpOnly, meaning it can&apos;t be
            read by JavaScript running on the page, and it expires after
            seven days. There are no third-party advertising or
            tracking cookies.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Data Security</h3>
          <p className="mt-2 text-secondary">
            Passwords are hashed, sensitive routes are rate-limited, and
            access to the admin panel is restricted at the server level.
            A full breakdown of how this site is secured is available on
            the{" "}
            <a href="/security" className="text-primary">
              Security
            </a>{" "}
            page.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Your Choices</h3>
          <p className="mt-2 text-secondary">
            If you&apos;d like your account or contact form data
            reviewed or removed, reach out through the{" "}
            <a href="/contact" className="text-primary">
              contact form
            </a>{" "}
            with the email address associated with your submission.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Changes to This Policy</h3>
          <p className="mt-2 text-secondary">
            This site is actively developed, and this policy will be
            updated as its features change. Check back here if
            you&apos;d like the current version.
          </p>
        </div>
      </div>
    </Section>
  );
}
