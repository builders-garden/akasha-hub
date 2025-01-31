import * as React from "react";

import { AppSidebar } from "@/components/home/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AppLayout({
  children,
}: React.PropsWithChildren): Promise<React.JSX.Element> {
  // const profile = await getProfile();
  const profile = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    theme: "light",
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider>
        <AppSidebar profile={profile} />
        {/* Set max-width so full-width tables can overflow horizontally correctly */}
        <SidebarInset
          id="skip"
          className="size-full lg:peer-data-[state=collapsed]:max-w-[calc(100vw-var(--sidebar-width-icon))] lg:peer-data-[state=expanded]:max-w-[calc(100vw-var(--sidebar-width))]"
        >
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
