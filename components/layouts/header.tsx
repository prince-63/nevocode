"use client";

import { useEffect, useState } from "react";
import { LogOut, Menu, X } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import NAV_LINKS from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";
import useScroll from "@/hooks/use-scroll";
import Link from "@/components/navigation/link";
import IconButton from "@/components/general/icon-button";
import Logo from "@/components/general/logo";
import ThemeSwitcher from "@/components/general/theme-switcher";
import React from "react";
import AuthDialog from "./auth-dialog";
import { signOut, useSession } from "next-auth/react";

interface HeaderProps {
  className?: string | "";
}

const Header = ({ className }: HeaderProps) => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const { status } = useSession();

  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 h-[60px] flex items-center justify-center w-full bg-lightBg dark:bg-darkBg border-b border-transparent border-lightBg dark:border-darkBg",
        className,
        scrolled
          ? "dark:border-lightBg/40 border-darkBg/40 backdrop-blur-xl"
          : "",
      )}
      inert={isOpen ? true : undefined}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Logo />
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-slate-600 dark:bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            {status === "authenticated" ? (
              <IconButton onClick={() => signOut()}>
                <LogOut />
              </IconButton>
            ) : (
              <AuthDialog />
            )}
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <div className="md:hidden flex items-center gap-4">
            <div className="md:hidden">
              <ThemeSwitcher />
            </div>
            <div className="md:hidden">
              {status === "authenticated" ? (
                <IconButton onClick={() => signOut()}>
                  <LogOut />
                </IconButton>
              ) : (
                <AuthDialog />
              )}
            </div>
            <DrawerTrigger asChild className="flex md:hidden">
              <IconButton>
                <Menu />
              </IconButton>
            </DrawerTrigger>
          </div>

          <DrawerContent className="w-[240px]">
            <DrawerHeader>
              <DrawerTitle className="flex items-center justify-between border-b border-gray-100 px-4">
                <Logo />
                <DrawerClose asChild>
                  <IconButton>
                    <X />
                  </IconButton>
                </DrawerClose>
              </DrawerTitle>
              <DrawerDescription className="hidden" />
            </DrawerHeader>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
