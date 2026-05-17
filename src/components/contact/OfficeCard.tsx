import { Mail, MapPin, Phone } from "lucide-react";
import type { Office } from "@/lib/data/offices";

export function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="glass-panel rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-brand-gold/10">
      <h3 className="flex items-center gap-2 font-display text-md font-bold text-white">
        <MapPin size={16} className="text-brand-gold" />
        {office.name}
      </h3>
      <p className="mt-2 pl-6 text-sm text-slate-400">{office.address}</p>
      <div className="mt-4 flex flex-wrap gap-4 pl-6 text-xs font-semibold text-slate-300">
        {office.phones.map((phone) => (
          <span key={phone} className="flex items-center gap-1.5">
            <Phone size={12} className="text-slate-500" />
            {phone}
          </span>
        ))}
        <span className="flex items-center gap-1.5">
          <Mail size={12} className="text-slate-500" />
          <a href={`mailto:${office.email}`} className="text-brand-gold hover:underline">
            {office.email}
          </a>
        </span>
      </div>
    </div>
  );
}
