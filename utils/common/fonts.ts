import { Lilita_One, Karla } from "next/font/google";

export const lilita_one = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export const karla = Karla({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});