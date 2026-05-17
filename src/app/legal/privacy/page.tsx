import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Ibeto Group website.",
};

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: May 2026" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LegalBlock title="Introduction">
            <p>
              The Ibeto Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This
              policy explains how we collect, use, and protect personal information submitted through
              this website.
            </p>
          </LegalBlock>
          <LegalBlock title="Information We Collect">
            <p>
              When you submit a contact form, we may collect your name, company, email, telephone
              number, and message content. We may also collect technical data such as IP address and
              browser type through standard analytics tools.
            </p>
          </LegalBlock>
          <LegalBlock title="How We Use Information">
            <p>
              We use submitted information to respond to inquiries, route requests to the appropriate
              division, and improve our services. We do not sell personal data to third parties.
            </p>
          </LegalBlock>
          <LegalBlock title="Data Retention & Security">
            <p>
              We retain contact records only as long as necessary for business and legal purposes. We
              implement reasonable technical and organizational measures to protect your data.
            </p>
          </LegalBlock>
          <LegalBlock title="Your Rights">
            <p>
              You may request access, correction, or deletion of your personal data by contacting{" "}
              <a href="mailto:info@ibetogroup.com" className="text-brand-gold hover:underline">
                info@ibetogroup.com
              </a>
              .
            </p>
          </LegalBlock>
          <LegalBlock title="Contact">
            <p>
              For privacy-related questions, email info@ibetogroup.com or write to our corporate head
              office at 60-61 Igwe Orizu Road, Nnewi, Anambra State, Nigeria.
            </p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}
