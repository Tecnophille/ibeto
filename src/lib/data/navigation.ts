export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News", href: "/news" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  sectors: [
    { label: "Ibeto Petrochemicals", href: "/businesses/petrochemicals" },
    { label: "Ibeto Cement", href: "/businesses/cement" },
    { label: "Union Autoparts", href: "/businesses/automotive" },
    { label: "Ibeto Hospitality", href: "/businesses/hospitality" },
    { label: "Ibeto Properties", href: "/businesses/properties" },
    { label: "Oil & Gas Trading", href: "/businesses/oil-gas" },
  ],
  institutional: [
    { label: "About the Group", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Media Centre", href: "/media" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
} as const;
