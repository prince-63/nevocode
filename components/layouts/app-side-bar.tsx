import { SquareChevronLeft } from "lucide-react";

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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "../general/logo";
import { Separator } from "../ui/separator";
import { GuideType } from "@/utils/types";
import Link from "../navigation/link";
import { H4 } from "../ui/typography";
import ThemeSwitcher from "../general/theme-switcher";
import { lilita_one } from "@/utils/general/fonts";

interface AppSidebarProps {
  content: GuideType;
}

export async function AppSidebar({ content }: AppSidebarProps) {
  return (
    <Sidebar className="relative h-full left-0">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center justify-between h-12">
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <SidebarTrigger className="md:hidden flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-100 d active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-800 dark:[&_svg]:stroke-gray-200 [&_svg]:hover:stroke-gray-700 dark:[&_svg]:hover:stroke-gray-900 [&_svg]:w-6 [&_svg]:h-6">
                <SquareChevronLeft className="w-8 h-8" />
              </SidebarTrigger>
            </div>
          </SidebarGroupLabel>
          <Separator className="dark:bg-white bg-gray-200" />
          <SidebarGroupContent>
            <SidebarHeader>
              <H4
                className={`${lilita_one.className} text-primary text-center dark:text-primary`}
              >
                {content.title}
              </H4>
            </SidebarHeader>
            <SidebarMenu>
              {content.docs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={`/learn/${item.url}`} className="text-wrap">
                      {item.title}
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
