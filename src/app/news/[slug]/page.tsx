import type { Metadata } from "next";
import Image from "next/image";
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
    <article>
      <div className="relative mt-[72px] h-64 overflow-hidden md:h-80">
        <div className="relative h-full w-full">
          <Image src={article.image} alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
      </div>
      <div className="container-corporate max-w-3xl py-12">
        <Link
          href="/news"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          <ArrowLeft size={16} /> All News
        </Link>
        <span className="text-xs font-bold uppercase text-brand-primary">{article.category}</span>
        <time className="mt-2 block text-sm text-brand-textMuted" dateTime={article.date}>
          {date}
        </time>
        <h1 className="mt-4 font-display text-3xl font-bold text-brand-navy md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-brand-textMuted">{article.body}</p>
      </div>
    </article>
  );
}
