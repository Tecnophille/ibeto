import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalBlock } from "@/components/legal/LegalBlock";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for The Ibeto Group website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: May 2026" />
      <section className="section-padding">
        <div className="container-corporate max-w-3xl">
          <LegalBlock title="Acceptance of Terms">
            <p>By accessing ibeto.com, you agree to these Terms of Service.</p>
          </LegalBlock>
          <LegalBlock title="Use of Website">
            <p>
              This site provides general corporate information. Content is informational only and
              does not constitute an offer or professional advice.
            </p>
          </LegalBlock>
          <LegalBlock title="Intellectual Property">
            <p>
              All materials are owned by or licensed to The Ibeto Group. Unauthorized reproduction
              is prohibited without written consent.
            </p>
          </LegalBlock>
          <LegalBlock title="Governing Law">
            <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}
