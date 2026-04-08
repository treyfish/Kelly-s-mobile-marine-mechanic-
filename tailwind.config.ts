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
        navy: "#0a1628",
        teal: "#0891b2",
        gold: "#f59e0b",
      },
      fontFamily: {
        oswald: ["Oswald", "var(--font-inter)", "sans-serif"],
        inter: ["Inter", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
