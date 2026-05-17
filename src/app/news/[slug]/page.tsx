import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getArticle, newsArticles } from "@/lib/data/news";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default function NewsArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const date = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="pb-24">
      <div className="border-b border-white/5 pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-gold"
          >
            <ArrowLeft size={16} /> All News
          </Link>
          <span className="rounded-full border border-white/10 bg-brand-dark/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            {article.category}
          </span>
          <time className="mt-4 block text-sm text-slate-500" dateTime={article.date}>
            {date}
          </time>
          <h1 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
            {article.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-300">{article.body}</p>
      </div>
    </article>
  );
}
