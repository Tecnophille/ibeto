import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BusinessCard } from "@/components/businesses/BusinessCard";
import { subsidiaries } from "@/lib/data/subsidiaries";

export const metadata: Metadata = {
  title: "Businesses",
  description: "Explore The Ibeto Group's operating divisions.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Six Sectors, One Vision"
        description="As a diversified conglomerate, our interests across multiple industries reflect our commitment to fulfilling essential needs."
      />
      <section className="section-padding">
        <div className="container-corporate grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subsidiaries.map((sub) => (
            <BusinessCard key={sub.slug} sub={sub} />
          ))}
        </div>
      </section>
    </>
  );
}
