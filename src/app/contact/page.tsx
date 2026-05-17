import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OfficeCard } from "@/components/contact/OfficeCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { offices } from "@/lib/data/offices";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Ibeto Group — offices across Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="green"
        eyebrow="Contact Us"
        title="Corporate Directory"
        description="Reach our head office, liaison offices, and division-specific teams."
      />
      <section className="section-padding">
        <div className="container-corporate">
          <SectionHeader eyebrow="Locations" title="Our Offices" className="mb-12" />
          <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Enterprise"
                title="Submit an Inquiry"
                description="Partnership, distribution, procurement, media, careers, and investment enquiries."
              />
              <p className="mt-6 text-sm text-brand-textMuted">
                Tel:{" "}
                <a href="tel:+2349088979984" className="font-semibold text-brand-primary hover:underline">
                  09088979984
                </a>
                {" · "}
                <a href="tel:+2347040145526" className="font-semibold text-brand-primary hover:underline">
                  07040145526
                </a>
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
