import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#52A4DB",
          navy: "#134471",
          dark: "#0C2B47",
          light: "#F0F7FC",
          sky: "#6BB5E6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
