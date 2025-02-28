import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { karla } from "@/utils/common/fonts";

export const metadata: Metadata = {
  title: {
    default: "CSExplore - Master Competitive Programming & System Design",
    template: "%s - CSExplore",
  },
  description:
    "CSExplore helps you master competitive programming, system design, and computer science concepts through expert tutorials, coding challenges, and real-world problem-solving strategies. Elevate your coding skills and stay ahead in tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} bg-slate-50`}>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Header />
            <div>{children}</div>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
