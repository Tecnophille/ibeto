import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { NewsCard } from "@/components/news/NewsCard";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Press releases and news from The Ibeto Group.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Media Centre" title="News & Press Releases" />
      <section className="section-padding">
        <div className="container-corporate grid grid-cols-1 gap-6 md:grid-cols-2">
          {newsArticles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
