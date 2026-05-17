"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-nav">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-gradient-to-tr from-brand-navy to-blue-950 transition-all group-hover:border-brand-gold">
            <span className="font-display text-lg font-extrabold text-brand-gold">IG</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold leading-none tracking-tight text-white">
              IBETO
            </span>
            <span className="text-xs font-semibold tracking-wider text-brand-gold">THE GROUP</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  active ? "text-brand-gold" : "text-slate-300 hover:text-brand-gold"
                )}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-brand-gold/40 px-5 py-2.5 text-sm font-bold tracking-wide text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-navy hover:shadow-goldGlow"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-slate-300 transition-colors hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 flex h-[calc(100vh-5rem)] flex-col justify-between border-t border-white/5 bg-brand-dark/95 px-6 py-8 backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-white/5 pb-3 text-lg font-bold",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-brand-gold"
                    : "text-slate-300 hover:text-brand-gold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mb-8 block w-full rounded-lg bg-brand-gold py-3.5 text-center font-bold text-brand-navy shadow-goldGlow"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
