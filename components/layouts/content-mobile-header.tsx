"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import Logo from "../general/logo";
import ThemeSwitcher from "../general/theme-switcher";
import { cn } from "@/lib/utils";
import IconButton from "../general/icon-button";

const ContentMobileHeader = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className={cn(
        "md:hidden h-[60px] flex items-center justify-between bg-lightBg dark:bg-darkBg border-b border-darkBg/10 dark:border-lightBg/10 px-3",
      )}
    >
      <div className="flex items-center gap-2">
        <IconButton onClick={() => toggleSidebar()}>
          <Menu />
        </IconButton>
        <ThemeSwitcher />
      </div>
      <div>
        <Logo />
      </div>
    </header>
  );
};

export default ContentMobileHeader;
