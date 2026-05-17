import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/lib/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#05080f] pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-navy">
                <span className="font-display text-md font-extrabold text-brand-gold">IG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-md font-extrabold leading-none tracking-tight text-white">
                  IBETO
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-brand-gold">
                  THE GROUP
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              One of Nigeria&apos;s leading industrial conglomerates — cement, petrochemicals,
              automotive components, hospitality, real estate, and oil &amp; gas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              Operating Sectors
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {footerNav.sectors.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-brand-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              Institutional
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {footerNav.institutional.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-brand-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-slate-500" />
                <span>046-460665</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-slate-500" />
                <a href="mailto:info@ibetogroup.com" className="hover:text-brand-gold">
                  info@ibetogroup.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={12} className="text-slate-500" />
                <span>Nnewi &amp; Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:flex-row">
          <span>&copy; {year} The Ibeto Group. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {footerNav.legal.map((item, i) => (
              <span key={item.href} className="flex items-center gap-4">
                {i > 0 && <span>&bull;</span>}
                <Link href={item.href} className="hover:text-brand-gold">
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
