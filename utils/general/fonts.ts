import { Karla, PT_Sans, Fira_Code } from "next/font/google";

export const karla = Karla({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans",
});

// Monospace (For Code Snippets)
export const fira_code = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});
