"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative mt-20 overflow-hidden bg-brand-navy" aria-label="Featured highlights">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-all duration-700",
          slide.gradient
        )}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" aria-hidden />

      <div className="container-corporate relative flex min-h-[520px] flex-col justify-center py-16 md:min-h-[580px] md:py-20">
        <div key={slide.id} className="max-w-3xl animate-fadeIn">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {slide.description}
          </p>
          <Link
            href={slide.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-accentDark"
          >
            {slide.cta.label}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="absolute bottom-8 right-4 flex items-center gap-2 md:right-8">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-10 flex gap-2 md:absolute md:bottom-8 md:left-4 md:mt-0 lg:left-8">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 rounded-full transition-all",
                i === index ? "w-10 bg-brand-accent" : "w-6 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
