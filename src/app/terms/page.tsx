import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export default function TermsPage() {
  return (
    <Section className="py-section">
      <Heading as="h1" gradient>
        Terms of Service
      </Heading>
      <p className="mt-2 text-secondary">Last updated: 2026</p>

      <div className="mt-4 max-w-2xl space-y-4">
        <div>
          <h3 className="text-primary">Overview</h3>
          <p className="mt-2 text-secondary">
            This site is a personal portfolio and project showcase
            belonging to Rohit Alam. It is not a commercial product or
            service — it exists to document my work, my projects, and
            how I build things.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Accounts</h3>
          <p className="mt-2 text-secondary">
            Creating an account ties an email and password to your
            visit. You&apos;re responsible for keeping your login
            credentials to yourself. I reserve the right to remove
            accounts that are used to abuse the contact form, attempt to
            bypass rate limits, or interfere with how the site is meant
            to be used.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Acceptable Use</h3>
          <p className="mt-2 text-secondary">
            Please don&apos;t use automated tools to scrape or abuse
            this site&apos;s forms, attempt to bypass authentication or
            rate limiting, or submit illegal or abusive content through
            the contact form. This site is rate-limited and monitored
            specifically to catch this kind of activity.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Content Ownership</h3>
          <p className="mt-2 text-secondary">
            Blog posts, project write-ups, and other content published
            on this site belong to me unless stated otherwise. Anything
            you submit through the contact form is used only to respond
            to you — it isn&apos;t published or shared elsewhere.
          </p>
        </div>

        <div>
          <h3 className="text-primary">No Warranty</h3>
          <p className="mt-2 text-secondary">
            This site is a personal, actively developed project. It&apos;s
            provided as-is, and features may change, break, or evolve as
            I continue building it.
          </p>
        </div>

        <div>
          <h3 className="text-primary">Contact</h3>
          <p className="mt-2 text-secondary">
            Questions about these terms can be sent through the{" "}
            <a href="/contact" className="text-primary">
              contact form
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
