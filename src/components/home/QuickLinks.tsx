import Link from "next/link";
import { Building2, Leaf, TrendingUp, Newspaper, Phone } from "lucide-react";

const links = [
  { href: "/businesses", label: "Our Businesses", icon: Building2 },
  { href: "/sustainability", label: "Sustainability", icon: Leaf },
  { href: "/investors", label: "Investor Centre", icon: TrendingUp },
  { href: "/news", label: "News & Media", icon: Newspaper },
  { href: "/contact", label: "Contact Us", icon: Phone },
];

export function QuickLinks() {
  return (
    <section className="border-b border-brand-border bg-white py-4 shadow-sm">
      <div className="container-corporate">
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-0 md:divide-x md:divide-brand-border">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href} className="md:px-6">
              <Link
                href={href}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-primary"
              >
                <Icon size={16} className="text-brand-primary" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
