export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  gradient: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "industrial",
    eyebrow: "The Ibeto Group",
    title: "Powering Nigeria's Industrial Transformation",
    description:
      "A diversified conglomerate delivering quality products and prompt services across petrochemicals, cement, automotive, hospitality, and energy.",
    cta: { label: "Explore Our Businesses", href: "/businesses" },
    gradient: "from-brand-navy via-brand-navyLight to-brand-primaryDark",
  },
  {
    id: "petrochemicals",
    eyebrow: "Ibeto Petrochemical Industries",
    title: "World-Class Lubricants & Bulk Storage",
    description:
      "Expresso blended oils from Nnewi and 60,000+ metric tonnes of petroleum liquid storage at Apapa Wharf, Lagos.",
    cta: { label: "Petrochemicals Division", href: "/businesses/petrochemicals" },
    gradient: "from-slate-800 via-blue-900 to-brand-navy",
  },
  {
    id: "cement",
    eyebrow: "Ibeto Cement Company",
    title: "Building Africa's Infrastructure",
    description:
      "Modern cement bagging at Bundu Ama, Port Harcourt, with backward integration at Nigercem, Nkalagu.",
    cta: { label: "Cement Division", href: "/businesses/cement" },
    gradient: "from-stone-700 via-amber-900 to-brand-accentDark",
  },
  {
    id: "sustainability",
    eyebrow: "Sustainable Impact. Real Progress",
    title: "Investing in Communities & Indigenous Capacity",
    description:
      "We create ventures that serve stakeholders, host communities, and Nigeria's long-term industrial self-sufficiency.",
    cta: { label: "Our Sustainability Approach", href: "/sustainability" },
    gradient: "from-brand-primaryDark via-brand-primary to-emerald-800",
  },
];
