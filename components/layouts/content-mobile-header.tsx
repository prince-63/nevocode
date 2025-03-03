"use client";

import { SquareChevronRight } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import Logo from "../general/logo";
import ThemeSwitcher from "../general/theme-switcher";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const ContentMobileHeader = () => {
  const scrolled = useScroll(40);

  return (
    <div
      className={cn(
        "md:hidden sticky top-0 z-30 h-[60px] flex items-center justify-between w-full bg-lightBg dark:bg-darkBg border-b border-transparent border-lightBg dark:border-darkBg px-3",
        scrolled
          ? "dark:border-lightBg/40 border-darkBg/40 backdrop-blur-xl"
          : "",
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-100 d active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-800 dark:[&_svg]:stroke-gray-200 [&_svg]:hover:stroke-gray-700 dark:[&_svg]:hover:stroke-gray-900 [&_svg]:w-6 [&_svg]:h-6">
          <SquareChevronRight className="w-8 h-8" />
        </SidebarTrigger>
        <ThemeSwitcher />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default ContentMobileHeader;
