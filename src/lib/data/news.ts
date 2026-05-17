export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  category: "Corporate" | "Cement" | "Petrochemicals" | "CSR";
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "bundu-ama-terminal-operations",
    title: "Ibeto Cement Strengthens Port Harcourt Terminal Operations",
    excerpt:
      "Bundu Ama bagging facility continues to support infrastructure projects across the Niger Delta and beyond.",
    body: "Ibeto Cement Company Ltd. has reinforced operations at its Bundu Ama terminal in Port Harcourt, ensuring reliable supply of bagged cement to contractors and distributors serving major infrastructure programmes across southern Nigeria.",
    date: "2026-03-12",
    category: "Cement",
  },
  {
    slug: "expresso-product-range",
    title: "Expresso Lubricants Expands Industrial Product Line",
    excerpt:
      "Ibeto Petrochemical Industries broadens its blended oil portfolio for automotive and factory equipment markets.",
    body: "Ibeto Petrochemical Industries Limited has expanded the Expresso lubricants range, adding formulations engineered for heavy industrial equipment and commercial fleet operators seeking locally manufactured, high-performance oils.",
    date: "2026-02-28",
    category: "Petrochemicals",
  },
  {
    slug: "community-education-initiative",
    title: "Ibeto Group Supports Community Education Programmes",
    excerpt:
      "Corporate social investment initiatives focus on schools and skills development in host communities.",
    body: "The Ibeto Group continues its commitment to host communities through education support programmes, scholarships, and infrastructure improvements aligned with our long-standing corporate social responsibility framework.",
    date: "2026-01-15",
    category: "CSR",
  },
  {
    slug: "union-batteries-export-growth",
    title: "Union Batteries Records Strong Regional Demand",
    excerpt:
      "Union Autoparts Manufacturing sees growing uptake of locally produced batteries across West African markets.",
    body: "Union Autoparts Manufacturing Co. Ltd. reports increased demand for Union Batteries from distributors across West Africa, reflecting confidence in Nigerian-made automotive components meeting international quality benchmarks.",
    date: "2025-11-20",
    category: "Corporate",
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
