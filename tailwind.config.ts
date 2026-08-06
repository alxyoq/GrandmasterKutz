import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          deep: "rgb(var(--brand-deep) / <alpha-value>)",
          soft: "rgb(var(--brand-soft) / <alpha-value>)",
        },
        pop: "rgb(var(--pop) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        ui: ["var(--font-ui)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        ink: "7px 7px 0 rgb(var(--ink))",
        "ink-sm": "4px 4px 0 rgb(var(--ink))",
        "ink-lg": "12px 12px 0 rgb(var(--ink))",
      },
      maxWidth: {
        page: "1400px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

