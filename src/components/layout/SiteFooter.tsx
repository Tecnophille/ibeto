import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { IbetoLogo } from "@/components/layout/IbetoLogo";
import { footerNav } from "@/lib/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-corporate grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <IbetoLogo variant="footer" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A leading Nigerian industrial conglomerate — cement, petrochemicals, automotive,
            hospitality, real estate, and oil &amp; gas.
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a
              href="https://instagram.com/@ibetogroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-brand-accent"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/reel/1578070599878114"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-brand-accent"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Our Businesses
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {footerNav.sectors.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {footerNav.institutional.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-brand-accent" />
              046-460665
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-brand-accent" />
              <a href="mailto:info@ibetogroup.com" className="hover:text-white">
                info@ibetogroup.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-accent" />
              Nnewi, Anambra · Lagos · Abuja · Port Harcourt
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-corporate flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <span>&copy; {year} The Ibeto Group. All rights reserved.</span>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
