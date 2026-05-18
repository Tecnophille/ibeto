import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* Logo sphere blue (mid-tone) + shadow/highlight from ibeto-logo.png */
          primary: "#1A6FBD",
          primaryDark: "#0E4A85",
          primaryLight: "#E9F3FC",
          accent: "#C8952E",
          accentDark: "#9A7322",
          navy: "#0F2744",
          navyLight: "#1A3A5C",
          surface: "#FFFFFF",
          muted: "#F4F6F8",
          border: "#E2E8F0",
          text: "#1A2332",
          textMuted: "#5C6670",
          /* legacy aliases */
          dark: "#0F2744",
          gold: "#C8952E",
          slate: "#5C6670",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 39, 68, 0.08)",
        header: "0 2px 16px rgba(15, 39, 68, 0.06)",
        hero: "0 24px 48px rgba(15, 39, 68, 0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
