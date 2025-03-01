import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const tailwindConfig = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Deep blue for CTAs
        secondary: "#F59E0B", // Muted orange for highlights
        darkBg: "#0F172A", // Dark mode background
        lightBg: "#F9FAFB", // Light mode background
        textLight: "#1F2937", // Dark gray text
        textDark: "#E2E8F0", // Light gray text for dark mode
      },
      keyframes: {
        open: {
          "0%": {
            opacity: "1",
            transform: "translateX(100%)",
          },
        },
        close: {
          to: {
            opacity: "0",
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "drawer-open": "open 0.3s ease-in-out",
        "drawer-close": "close 0.3s ease-in-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;

export default tailwindConfig;
