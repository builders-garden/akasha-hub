import packageInfo from "../../package.json";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  `http://localhost:${process.env.PORT ?? 3000}`;

export const AppInfo = {
  APP_NAME: "Akasha Hub",
  APP_DESCRIPTION: "Akasha Hub, the place to connect and work at the hubs.",
  PRODUCTION: process.env.NODE_ENV === "production",
  VERSION: packageInfo.version,
  BASE_URL: baseUrl,
} as const;
