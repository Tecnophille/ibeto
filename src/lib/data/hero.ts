import { images } from "./images";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: string;
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
    image: images.hero.industrial,
    gradient: "from-brand-navy/90 via-brand-navy/70 to-brand-primary/80",
  },
  {
    id: "petrochemicals",
    eyebrow: "Ibeto Petrochemical Industries",
    title: "World-Class Lubricants & Bulk Storage",
    description:
      "Expresso blended oils from Nnewi and 60,000+ metric tonnes of petroleum liquid storage at Apapa Wharf, Lagos.",
    cta: { label: "Petrochemicals Division", href: "/businesses/petrochemicals" },
    image: images.hero.petrochemicals,
    gradient: "from-slate-900/90 via-blue-900/70 to-brand-navy/80",
  },
  {
    id: "cement",
    eyebrow: "Ibeto Cement Company",
    title: "Building Africa's Infrastructure",
    description:
      "Modern cement bagging at Bundu Ama, Port Harcourt, with backward integration at Nigercem, Nkalagu.",
    cta: { label: "Cement Division", href: "/businesses/cement" },
    image: images.hero.cement,
    gradient: "from-stone-900/90 via-amber-900/60 to-brand-navy/70",
  },
  {
    id: "sustainability",
    eyebrow: "Sustainable Impact. Real Progress",
    title: "Investing in Communities & Indigenous Capacity",
    description:
      "We create ventures that serve stakeholders, host communities, and Nigeria's long-term industrial self-sufficiency.",
    cta: { label: "Our Sustainability Approach", href: "/sustainability" },
    image: images.hero.sustainability,
    gradient: "from-brand-primaryDark/90 via-brand-primary/70 to-emerald-900/80",
  },
];
