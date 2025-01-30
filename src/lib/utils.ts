import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { AppInfo } from "@/constants/app-info";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  if (!name) {
    return "";
  }
  return name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
}

export function createTitle(title: string, addSuffix: boolean = true): string {
  if (!addSuffix) {
    return title;
  }
  if (!title) {
    return AppInfo.APP_NAME;
  }

  return `${title} | ${AppInfo.APP_NAME}`;
}
