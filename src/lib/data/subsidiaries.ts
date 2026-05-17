import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Droplet,
  Battery,
  Hotel,
  Building2,
  Flame,
} from "lucide-react";

export type Subsidiary = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
  badge: string;
  color: string;
  accent: string;
  stats: string;
  highlights: string[];
  capabilities: string[];
  contactEmail: string;
};

export const subsidiaries: Subsidiary[] = [
  {
    slug: "petrochemicals",
    title: "Ibeto Petrochemical Industries",
    shortTitle: "Petrochemicals",
    tagline: "Expresso Lubricants & Petroleum Storage",
    desc: "Operating one of the largest blending plants in Nnewi and a massive 60,000+ metric tonne petroleum liquid storage facility at Apapa Wharf, Lagos.",
    longDesc:
      "Ibeto Petrochemical Industries Limited manufactures premium-grade automotive and industrial lubricants under the Expresso brand. Our Apapa terminal provides strategic bulk storage and distribution capacity serving downstream operators across West Africa.",
    icon: Droplet,
    badge: "Market Leader",
    color: "from-blue-600/20 to-brand-navy/80",
    accent: "text-blue-400",
    stats: "60,000+ MT Capacity",
    highlights: [
      "Largest lubricant blending plant in Nnewi",
      "Apapa Wharf liquid storage terminal",
      "Expresso automotive & industrial oils",
    ],
    capabilities: [
      "Automotive lubricant blending",
      "Industrial oils & greases",
      "Bulk petroleum storage",
      "Terminal logistics & distribution",
    ],
    contactEmail: "petrochemicals@ibetogroup.com",
  },
  {
    slug: "cement",
    title: "Ibeto Cement Company",
    shortTitle: "Cement",
    tagline: "Building Africa's Infrastructure",
    desc: "Modern high-throughput cement bagging terminal at Bundu Ama, Port Harcourt, with backward integration at Nigercem, Nkalagu.",
    longDesc:
      "Ibeto Cement Company Ltd. spearheads regional industrialization through integrated cement manufacturing and bagging operations. Our Port Harcourt terminal and Nkalagu plants support national infrastructure development.",
    icon: Factory,
    badge: "Backward Integration",
    color: "from-amber-600/20 to-brand-navy/80",
    accent: "text-brand-gold",
    stats: "Modern PH Terminal",
    highlights: [
      "Bundu Ama bagging terminal",
      "Nigercem Nkalagu integration",
      "National infrastructure supply",
    ],
    capabilities: [
      "Cement manufacturing",
      "Bagging & terminal operations",
      "Bulk distribution",
      "Construction sector supply",
    ],
    contactEmail: "cement@ibetogroup.com",
  },
  {
    slug: "automotive",
    title: "Union Autoparts Manufacturing",
    shortTitle: "Automotive",
    tagline: "Automotive Parts & Union Batteries",
    desc: "West Africa's leading manufacturer of lead-acid batteries, brake pads, shoes, and automotive accessories engineered in Nnewi.",
    longDesc:
      "Union Autoparts Manufacturing Co. Ltd. delivers ISO-standard automotive components including Union Batteries, friction materials, and accessories — proudly manufactured in Nigeria for regional markets.",
    icon: Battery,
    badge: "ISO Standard",
    color: "from-emerald-600/20 to-brand-navy/80",
    accent: "text-emerald-400",
    stats: "100% Locally Manufactured",
    highlights: [
      "Union Batteries — regional leader",
      "Brake pads, shoes & linings",
      "Nnewi manufacturing hub",
    ],
    capabilities: [
      "Lead-acid battery production",
      "Brake & friction components",
      "Automotive accessories",
      "OEM & aftermarket supply",
    ],
    contactEmail: "automotive@ibetogroup.com",
  },
  {
    slug: "hospitality",
    title: "Ibeto Hospitality & Hotels",
    shortTitle: "Hospitality",
    tagline: "Premium Luxury & Leisure Services",
    desc: "World-class hospitality, secure conferences, and luxury accommodation in Abuja and Port Harcourt.",
    longDesc:
      "Ibeto Hotels delivers five-star business hospitality across strategically located properties, supporting corporate travel, events, and leisure guests with international service standards.",
    icon: Hotel,
    badge: "Luxury Service",
    color: "from-purple-600/20 to-brand-navy/80",
    accent: "text-purple-400",
    stats: "5-Star Properties",
    highlights: [
      "Business hotels — Abuja & PH",
      "Conference & event facilities",
      "Premium guest experience",
    ],
    capabilities: [
      "Accommodation & suites",
      "Conference & banqueting",
      "Corporate hospitality",
      "Event management",
    ],
    contactEmail: "hotels@ibetogroup.com",
  },
  {
    slug: "properties",
    title: "Ibeto Properties & Real Estate",
    shortTitle: "Properties",
    tagline: "Strategic Development & Assets",
    desc: "Premium commercial complexes, residential estates, and industrial properties across Nigeria's major business hubs.",
    longDesc:
      "Ibeto Properties develops and manages tier-one commercial and residential assets, supporting the Group's long-term capital strategy and urban development partnerships.",
    icon: Building2,
    badge: "Prime Portfolios",
    color: "from-cyan-600/20 to-brand-navy/80",
    accent: "text-cyan-400",
    stats: "Tier-1 Assets",
    highlights: [
      "Commercial office complexes",
      "Residential estates",
      "Industrial property management",
    ],
    capabilities: [
      "Commercial development",
      "Residential projects",
      "Asset management",
      "Leasing & partnerships",
    ],
    contactEmail: "properties@ibetogroup.com",
  },
  {
    slug: "oil-gas",
    title: "Ibeto Oil & Gas Trading",
    shortTitle: "Oil & Gas",
    tagline: "Downstream Energy Solutions",
    desc: "Bulk commodity trading, LPG distribution networks, and logistics infrastructure across West Africa.",
    longDesc:
      "Ibeto Oil & Gas Trading manages downstream energy commodities, storage partnerships, and logistics networks that power industrial and commercial operations regionally.",
    icon: Flame,
    badge: "Energy Hub",
    color: "from-rose-600/20 to-brand-navy/80",
    accent: "text-rose-400",
    stats: "Bulk Trading Terminals",
    highlights: [
      "Bulk petroleum trading",
      "LPG distribution",
      "Terminal & logistics partnerships",
    ],
    capabilities: [
      "Commodity trading",
      "LPG distribution",
      "Storage & logistics",
      "Downstream partnerships",
    ],
    contactEmail: "oilgas@ibetogroup.com",
  },
];

export function getSubsidiary(slug: string): Subsidiary | undefined {
  return subsidiaries.find((s) => s.slug === slug);
}

export const homeStats = [
  { value: "60k+", label: "MT Petrochemical Tankage" },
  { value: "6", label: "Core Industrial Divisions" },
  { value: "25+", label: "Years of Operations" },
  { value: "4", label: "Regional Office Locations" },
] as const;
