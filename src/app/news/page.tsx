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
      <PageHero
        eyebrow="Media Centre"
        title="News & Press Releases"
        description="Corporate announcements, sector updates, and community initiatives from across the Group."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {newsArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
