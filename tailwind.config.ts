import type { Config } from "tailwindcss";

/** Culorile vin din variabile CSS (src/app/globals.css), ca să funcționeze și în modul întunecat. */
const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        surface: c("surface"),
        ink: c("ink"),
        muted: c("muted"),
        line: c("line"),
        brand: c("brand"),
        "on-brand": c("on-brand"),
        accent: c("accent"),
        "on-accent": c("on-accent"),
        sage: c("sage"),
        coral: c("coral"),
        good: c("good"),
        "good-soft": c("good-soft"),
        bad: c("bad"),
        "bad-soft": c("bad-soft"),
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
    },
  },
  plugins: [],
};
export default config;
