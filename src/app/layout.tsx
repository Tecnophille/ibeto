import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibeto.com"),
  title: {
    default: "The Ibeto Group | Leading Industrial Conglomerate",
    template: "%s | The Ibeto Group",
  },
  description:
    "Official website of The Ibeto Group — cement, petrochemicals, automotive parts, hospitality, real estate, and oil & gas across Nigeria.",
  keywords: [
    "Ibeto Group",
    "Ibeto Cement",
    "Expresso Lubricants",
    "Union Autoparts",
    "Nigerian conglomerate",
  ],
  authors: [{ name: "The Ibeto Group" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "The Ibeto Group",
  },
  icons: {
    icon: "/ibeto-logo.png",
    apple: "/ibeto-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-brand-text antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
