"use client";

import { ChevronsLeft } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "../general/logo";
import { Separator } from "../ui/separator";
import { GuideType } from "@/utils/types";
import Link from "../navigation/link";
import { H2 } from "../ui/typography";
import ThemeSwitcher from "../general/theme-switcher";
import IconButton from "../general/icon-button";
import { Checkbox } from "../ui/checkbox";

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
            <SidebarHeader className="bg-lightBg/10 dark:bg-darkBg/10 py-0">
              <H2 className="pl-1 text-lg font-medium">{content.title}</H2>
            </SidebarHeader>
            <Separator className="dark:bg-white/10 bg-gray-200 mb-1" />
            <SidebarMenu>
              {content.docs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="px-3" asChild>
                    <div>
                      <Checkbox />
                      <Link
                        href={`/learn/${item.url}`}
                        className="text-md text-wrap"
                      >
                        {item.title}
                      </Link>
                    </div>
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
