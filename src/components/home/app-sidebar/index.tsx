"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/home/app-sidebar/nav-main";
import { NavUser } from "@/components/home/app-sidebar/nav-user";
import { Logo } from "@/components/ui/logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { MediaQueries } from "@/constants/media-queries";
import { Routes } from "@/constants/routes";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { ProfileDto } from "@/types/dtos/profile-dto";

export type AppSidebarProps = {
  profile: ProfileDto;
};
export function AppSidebar({ profile }: AppSidebarProps): React.JSX.Element {
  const pathname = usePathname();
  const sidebar = useSidebar();
  const xlUp = useMediaQuery(MediaQueries.XlUp, { ssr: true, fallback: true });
  const isCollapsed = !sidebar.isMobile && !sidebar.open;
  const showLogo = !isCollapsed || !xlUp;
  const pageToRedirect = pathname === Routes.Home ? Routes.Root : Routes.Home;

  React.useEffect(() => {
    sidebar.setOpen(xlUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xlUp]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={cn(
            "flex h-10 w-full flex-row items-center justify-between",
            !isCollapsed && "pl-0.5"
          )}
        >
          {showLogo && (
            <Link href={pageToRedirect}>
              <Logo className="truncate transition-[width,height,padding]" />
            </Link>
          )}
          {xlUp && (
            <SidebarTrigger
              icon={isCollapsed ? "menu" : "chevronLeft"}
              className="shrink-0 rounded-full text-muted-foreground"
            />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea
          verticalScrollBar
          /* Overriding the hardcoded { disply:table } to get full flex height */
          className="h-full [&>[data-radix-scroll-area-viewport]>div]:!flex [&>[data-radix-scroll-area-viewport]>div]:h-full [&>[data-radix-scroll-area-viewport]>div]:flex-col"
        >
          <NavMain />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser profile={profile} className="p-0" />
      </SidebarFooter>
    </Sidebar>
  );
}
