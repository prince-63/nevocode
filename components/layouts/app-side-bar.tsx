"use client";

import { ChevronsLeft } from "lucide-react";

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
import Logo from "../general/logo";
import { Separator } from "../ui/separator";
import { GuideType } from "@/utils/types";
import Link from "../navigation/link";
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
            <Separator className="dark:bg-white/10 bg-gray-200 mb-1" />
            <SidebarMenu>
              {content.docs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="px-3 hover:text-primary"
                    asChild
                  >
                    <div>
                      <Checkbox className="w-5 h-5" />
                      <Link
                        href={`/learn/${item.url}`}
                        className="font-normal w-full text-wrap"
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
