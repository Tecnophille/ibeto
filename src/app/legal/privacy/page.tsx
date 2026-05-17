import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalBlock } from "@/components/legal/LegalBlock";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Ibeto Group website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: May 2026" />
      <section className="section-padding">
        <div className="container-corporate max-w-3xl">
          <LegalBlock title="Introduction">
            <p>
              The Ibeto Group respects your privacy. This policy explains how we collect, use, and
              protect personal information submitted through this website.
            </p>
          </LegalBlock>
          <LegalBlock title="Information We Collect">
            <p>
              When you submit a contact form, we may collect your name, company, email, telephone
              number, and message content, plus standard technical data such as IP address through
              analytics tools.
            </p>
          </LegalBlock>
          <LegalBlock title="How We Use Information">
            <p>
              We use submitted information to respond to inquiries and route requests to the
              appropriate division. We do not sell personal data to third parties.
            </p>
          </LegalBlock>
          <LegalBlock title="Your Rights">
            <p>
              You may request access, correction, or deletion by contacting{" "}
              <a href="mailto:info@ibetogroup.com" className="text-brand-primary hover:underline">
                info@ibetogroup.com
              </a>
              .
            </p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}
