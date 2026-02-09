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
        // DEFINING THE BRAND PALETTE
        'quantum-red': '#FF3B3B',
        'quantum-slate': '#0F1115',
        'quantum-grey': '#F4F4F4',
        'quantum-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;