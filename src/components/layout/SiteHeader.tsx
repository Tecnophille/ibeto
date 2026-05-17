"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/data/navigation";
import { subsidiaries } from "@/lib/data/subsidiaries";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-header" : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="hidden border-b border-brand-primary/20 bg-brand-primary py-1.5 text-center text-xs font-medium text-white lg:block">
        Quality Products, Prompt Services — inspired to improve your lives
      </div>

      <div className="container-corporate flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded bg-brand-primary">
            <span className="font-display text-lg font-bold text-white">IG</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg font-bold leading-none text-brand-navy">
              IBETO GROUP
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-textMuted">
              Industries Limited
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {mainNav.map((item) => {
            if (item.href === "/businesses") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setBusinessOpen(true)}
                  onMouseLeave={() => setBusinessOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link flex items-center gap-1 px-3 py-2",
                      pathname.startsWith("/businesses") && "nav-link-active"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </Link>
                  {businessOpen && (
                    <div className="absolute left-0 top-full w-64 rounded border border-brand-border bg-white py-2 shadow-card">
                      {subsidiaries.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/businesses/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-primaryLight hover:text-brand-primary"
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("nav-link px-3 py-2", active && "nav-link-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-brand-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-primaryDark lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          type="button"
          className="p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-white px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded px-3 py-3 text-base font-semibold",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-brand-primaryLight text-brand-primary"
                    : "text-brand-text hover:bg-brand-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
