import { BellIcon, HomeIcon, UserIcon } from "lucide-react";

import { Routes } from "@/constants/routes";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon: LucideIcon;
};

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: Routes.Home,
    icon: HomeIcon,
  },
  {
    title: "Explore Hubs",
    href: Routes.Hubs,
    icon: UserIcon,
  },
  {
    title: "My Hubs",
    href: Routes.MyHubs,
    icon: UserIcon,
  },
];

export const accountNavItems: NavItem[] = [
  {
    title: "Profile",
    href: Routes.Profile,
    icon: UserIcon,
  },
  {
    title: "My Hubs",
    href: Routes.MyHubs,
    icon: UserIcon,
  },
  {
    title: "Notifications",
    href: Routes.Notifications,
    icon: BellIcon,
  },
];
