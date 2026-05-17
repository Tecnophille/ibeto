"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
    <section
      className="relative isolate mt-[72px] h-[85vh] max-h-[560px] min-h-[420px] overflow-hidden bg-brand-navy lg:mt-[104px]"
      aria-label="Featured highlights"
    >
      {/* Single active background — avoids stacked fill images expanding page height on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="relative h-full w-full">
          <Image
            key={slide.id}
            src={slide.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className={cn("absolute inset-0 bg-gradient-to-r", slide.gradient)} />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-10 sm:px-6 lg:px-8">
        <div key={slide.id} className="max-w-3xl animate-fadeIn">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
            {slide.description}
          </p>
          <Link
            href={slide.cta.href}
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-accentDark sm:mt-8 sm:px-8 sm:py-3.5"
          >
            {slide.cta.label}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div className="flex gap-2">
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
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-colors hover:bg-black/40"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-colors hover:bg-black/40"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
