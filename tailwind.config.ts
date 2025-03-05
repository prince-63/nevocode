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
        primary: "#388E3C",
        secondary: "#F59E0B",
        darkBg: "#222831",
        lightBg: "#F9FAFB",
        textLight: "#1F2937",
        textDark: "#E0E0E0",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
