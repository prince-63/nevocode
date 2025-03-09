import type { Metadata } from "next";
import "@/style/globals.css";
import { karla } from "@/utils/general/fonts";
import { Providers } from "@/lib/providers";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: {
    default: "System Node - Master Programming & System Design",
    template: "%s | System Node",
  },
  description:
    "System Node empowers you to understand programming, design patterns, system design, and core computer science concepts through expert guides, in-depth coding explanations, and real-world problem-solving strategies. Level up your coding skills and stay ahead in tech and productivity!",
  keywords: [
    "programming tutorials",
    "system design",
    "competitive programming",
    "coding challenges",
    "software development",
    "computer science",
    "System Node",
    "design patterns",
    "data structures and algorithms",
  ],
  openGraph: {
    title: "System Node - Master Programming & System Design",
    description:
      "Learn programming, system design, and computer science with structured guides, coding explanations, and real-world problem-solving strategies.",
    url: "https://systemnode.dev",
    type: "website",
    images: [
      {
        url: "https://systemnode.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "System Node - Master Programming & System Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@systemnode",
    title: "systemnode - Master Programming & System Design",
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
        </body>
      </Provider>
    </html>
  );
}
