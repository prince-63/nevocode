"use client";

import { BookmarkCheck, ChevronsLeft } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import { Separator } from "../ui/separator";
import Link from "../navigation/link";
import ThemeSwitcher from "./theme-switcher";
import IconButton from "./icon-button";
import { Muted } from "../ui/typography";
import { GuideType } from "@/lib/guides-data";

interface AppSidebarProps {
  content: GuideType;
}

export function AppSidebar({ content }: AppSidebarProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="relative h-full left-0">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center justify-between h-12">
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <IconButton className="md:hidden" onClick={() => toggleSidebar()}>
                <ChevronsLeft />
              </IconButton>
            </div>
          </SidebarGroupLabel>
          <Separator className="dark:bg-white/10 bg-gray-200" />
          <SidebarGroupContent>
            <Separator className="dark:bg-white/10 bg-gray-200 mb-1" />
            <SidebarMenu>
              {content.docs.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    className="flex items-start px-3 hover:text-primary h-max"
                    asChild
                  >
                    <Link
                      href={`/learn${item.url}`}
                      className="flex items-center w-full"
                    >
                      <BookmarkCheck className="dark:text-textDark text-textLight dark:hover:text-textDark" />
                      <Muted>{index + 1 + ". " + item.title}</Muted>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
