import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BusinessCard } from "@/components/businesses/BusinessCard";
import { NewsCard } from "@/components/news/NewsCard";
import { subsidiaries, homeStats } from "@/lib/data/subsidiaries";
import { tagline, chairmanMessage } from "@/lib/data/philosophy";
import { newsArticles } from "@/lib/data/news";

export default function HomePage() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      <section className="relative flex items-center pb-20 pt-36 md:py-44">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 text-left lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/20 bg-gradient-to-r from-brand-gold/10 to-transparent px-3.5 py-1.5">
                <Sparkles className="text-brand-gold" size={14} />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  {tagline}
                </span>
              </div>
              <h1 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
                Pioneering <span className="text-brand-gold">Africa&apos;s</span>
                <br />
                Industrial Future
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                From Nnewi blending plants to Apapa storage terminals and Port Harcourt cement
                operations — Ibeto delivers superior quality, prompt service, and indigenous
                industrial scale.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button href="/businesses" variant="primary">
                  Explore Businesses <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="secondary">
                  Corporate Relations
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {homeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel flex flex-col gap-2 rounded-2xl border-t border-brand-gold/20 p-6"
                >
                  <span className={`font-display text-3xl font-extrabold sm:text-4xl ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-[#090d16] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Multi-Sector Strength"
            title="Our Operational Divisions"
            description="Diversified interests across manufacturing, processing, trading, and hospitality that power Nigeria's industrial economy."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub) => (
              <BusinessCard key={sub.slug} sub={sub} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-white"
            >
              View all businesses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Leadership
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                A Message from Our Chairman
              </h2>
              <p className="text-slate-400 leading-relaxed">{chairmanMessage.letter.slice(0, 280)}…</p>
              <Button href="/about" variant="secondary" className="w-fit">
                About the Group
              </Button>
            </div>
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-2xl border border-white/5 bg-brand-navy/30 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 font-display text-xl font-extrabold text-brand-gold">
                    CMI
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {chairmanMessage.name} ({chairmanMessage.honors})
                    </h3>
                    <p className="text-xs font-bold text-brand-gold">{chairmanMessage.title}</p>
                  </div>
                </div>
                <blockquote className="text-sm italic leading-relaxed text-slate-300">
                  &ldquo;{chairmanMessage.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#090d16] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="News & Insights"
            title="Latest from the Group"
            description="Press releases, sector updates, and community initiatives."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/news" variant="secondary">
              All News
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Partner with Nigeria&apos;s Industrial Leaders
          </h2>
          <p className="mt-4 text-slate-400">
            Connect with the right division for distribution, procurement, media, or investment inquiries.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button href="/investors" variant="secondary">
              Investor Relations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
