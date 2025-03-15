import type { Metadata } from "next";
import "@/style/globals.css";
import { karla } from "@/utils/general/fonts";
import { Providers } from "@/lib/providers";
import { Provider } from "./provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Nevo Code - Master Programming & System Design",
    template: "%s | Nevo Code",
  },
  description:
    "Nevo Code empowers you to understand programming, design patterns, system design, and core computer science concepts through expert guides, in-depth coding explanations, and real-world problem-solving strategies. Level up your coding skills and stay ahead in tech and productivity!",
  keywords: [
    "programming tutorials",
    "system design",
    "competitive programming",
    "coding challenges",
    "software development",
    "computer science",
    "Nevo Code",
    "design patterns",
    "data structures and algorithms",
  ],
  openGraph: {
    title: "Nevo Code - Master Programming & System Design",
    description:
      "Learn programming, system design, and computer science with structured guides, coding explanations, and real-world problem-solving strategies.",
    url: "https://systemnode.dev",
    type: "website",
    images: [
      {
        url: "https://systemnode.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nevo Code - Master Programming & System Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nevocode",
    title: "Nevo Code - Master Programming & System Design",
    description:
      "Explore programming, system design, and computer science through expert guides, coding explanations, and hands-on problem-solving.",
    images: ["https://systemnode.dev/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <Provider>
        <body className={`${karla.className} `}>
          <Providers>
            <main className="relative flex bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark w-full flex-col">
              {children}
            </main>
          </Providers>
          <Analytics />
        </body>
      </Provider>
    </html>
  );
}
