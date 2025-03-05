import type { Metadata } from "next";
import "@/style/globals.css";
import { karla } from "@/utils/general/fonts";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: {
    default: "CSExplore - Master Competitive Programming & System Design",
    template: "%s - CSExplore",
  },
  description:
    "CSExplore helps you master competitive programming, system design, and computer science concepts through expert tutorials, coding challenges, and real-world problem-solving strategies. Elevate your coding skills and stay ahead in tech!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${karla.className} `}>
        <Providers>
          <main className="relative flex bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark w-full flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
