import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for The Ibeto Group website.",
};

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: May 2026" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LegalBlock title="Acceptance of Terms">
            <p>
              By accessing ibeto.com, you agree to these Terms of Service. If you do not agree,
              please do not use this website.
            </p>
          </LegalBlock>
          <LegalBlock title="Use of Website">
            <p>
              This site provides general corporate information about The Ibeto Group. Content is for
              informational purposes only and does not constitute an offer, contract, or professional
              advice.
            </p>
          </LegalBlock>
          <LegalBlock title="Intellectual Property">
            <p>
              All text, logos, graphics, and materials on this site are owned by or licensed to The
              Ibeto Group. Unauthorized reproduction is prohibited without prior written consent.
            </p>
          </LegalBlock>
          <LegalBlock title="Limitation of Liability">
            <p>
              We strive to keep information accurate and current but make no warranties regarding
              completeness or suitability. The Ibeto Group is not liable for damages arising from use
              of this website.
            </p>
          </LegalBlock>
          <LegalBlock title="External Links">
            <p>
              Links to third-party sites are provided for convenience. We are not responsible for
              external content or privacy practices.
            </p>
          </LegalBlock>
          <LegalBlock title="Governing Law">
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall
              be subject to the exclusive jurisdiction of Nigerian courts.
            </p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}
