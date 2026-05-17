import { Mail, MapPin, Phone } from "lucide-react";
import type { Office } from "@/lib/data/offices";

export function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="card-corporate p-6">
      <h3 className="flex items-center gap-2 font-display font-bold text-brand-navy">
        <MapPin size={16} className="text-brand-primary" />
        {office.name}
      </h3>
      <p className="mt-2 pl-6 text-sm text-brand-textMuted">{office.address}</p>
      <div className="mt-4 flex flex-wrap gap-4 pl-6 text-xs font-semibold text-brand-text">
        {office.phones.map((phone) => (
          <span key={phone} className="flex items-center gap-1.5">
            <Phone size={12} className="text-brand-textMuted" />
            {phone}
          </span>
        ))}
        <span className="flex items-center gap-1.5">
          <Mail size={12} className="text-brand-textMuted" />
          <a href={`mailto:${office.email}`} className="text-brand-primary hover:underline">
            {office.email}
          </a>
        </span>
      </div>
    </div>
  );
}
