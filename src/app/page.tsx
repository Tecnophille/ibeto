import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { QuickLinks } from "@/components/home/QuickLinks";
import { StatsBand } from "@/components/home/StatsBand";
import { ImpactCard } from "@/components/home/ImpactCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { BusinessCard } from "@/components/businesses/BusinessCard";
import { NewsCard } from "@/components/news/NewsCard";
import { subsidiaries } from "@/lib/data/subsidiaries";
import { chairmanMessage, tagline } from "@/lib/data/philosophy";
import { newsArticles } from "@/lib/data/news";
import { homeImpactCards } from "@/lib/data/home";
import { downloadableReports } from "@/lib/data/investors";

export default function HomePage() {
  const [featured, ...restNews] = newsArticles;

  return (
    <>
      <HeroCarousel />
      <QuickLinks />
      <StatsBand />

      {/* Impact pillars — Dangote-style grid */}
      <section className="section-padding bg-white">
        <div className="container-corporate">
          <SectionHeader
            eyebrow="Our Impact"
            title="Sustainable Impact. Real Progress"
            description="Creating ventures that serve stakeholders, communities, and Nigeria's industrial future."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeImpactCards.map((card) => (
              <ImpactCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* News — Dangote press section */}
      <section className="section-padding border-y border-brand-border bg-brand-muted">
        <div className="container-corporate">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              align="left"
              eyebrow="Press Releases"
              title="News & Events"
              description="Recent announcements from across the Group."
              className="mb-0"
            />
            <Link href="/news" className="link-arrow shrink-0">
              View all news <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard article={featured} featured />
            {restNews.slice(0, 2).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Businesses — BUA/Dangote sector grid */}
      <section className="section-padding bg-white">
        <div className="container-corporate">
          <SectionHeader
            eyebrow="Our Businesses"
            title="A Diversified Industrial Portfolio"
            description="Our interests across multiple industries reflect our commitment to fulfilling essential needs for Nigeria and beyond."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub) => (
              <BusinessCard key={sub.slug} sub={sub} />
            ))}
          </div>
        </div>
      </section>

      {/* Reports — Dangote investor block */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-corporate">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              align="left"
              light
              eyebrow="Investor Relations"
              title="Reports & Corporate Profile"
              description="Stay connected to the performance and governance of one of Nigeria's leading privately held industrial groups."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {downloadableReports
                .filter((d) => !d.disabled)
                .map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href}
                    className="group rounded border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-accent hover:bg-white/10"
                  >
                    <p className="text-xs font-bold uppercase text-brand-accent">{doc.type}</p>
                    <p className="mt-2 font-display font-bold text-white group-hover:text-brand-accent">
                      {doc.title}
                    </p>
                    <p className="mt-2 text-sm text-white/60">{doc.description}</p>
                  </a>
                ))}
              <Link
                href="/investors"
                className="flex flex-col justify-center rounded border border-dashed border-white/20 p-6 text-center transition-colors hover:border-brand-accent"
              >
                <span className="font-display font-bold text-white">Investor Centre</span>
                <span className="link-arrow mt-2 justify-center text-white/80">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman + Sustainability CTA */}
      <section className="section-padding bg-white">
        <div className="container-corporate grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="card-corporate p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-primary">Leadership</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
              {chairmanMessage.name}
            </h2>
            <p className="text-sm font-semibold text-brand-accent">{chairmanMessage.title}</p>
            <blockquote className="mt-6 border-l-4 border-brand-primary pl-4 text-brand-textMuted italic">
              &ldquo;{chairmanMessage.quote}&rdquo;
            </blockquote>
            <Button href="/about" variant="outline" className="mt-8">
              About the Group
            </Button>
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-primaryDark p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">
              Sustainability
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
              Building Prosperity &amp; Self-Sufficiency
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Our approach goes beyond compliance — we invest in host communities, indigenous
              manufacturing, and long-term environmental responsibility across all divisions.
            </p>
            <Button href="/sustainability" variant="secondary" className="mt-8 w-fit">
              View Sustainability Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-brand-border bg-brand-primaryLight py-16">
        <div className="container-corporate text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-primary">{tagline}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-navy">
            Partner With The Ibeto Group
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button href="/businesses" variant="outline">
              Explore Businesses
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
