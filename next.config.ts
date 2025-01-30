import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { createSecureHeaders } from "next-secure-headers";

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER === "true",
});

const nextConfig: NextConfig = {
  env: {
    PUBLIC_CERAMIC_API_ENDPOINT: process.env.PUBLIC_CERAMIC_API_ENDPOINT,
    PUBLIC_GRAPHQL_URI: process.env.PUBLIC_GRAPHQL_URI,
    PUBLIC_INDEXING_DID: process.env.PUBLIC_INDEXING_DID,
    PUBLIC_W3_STORAGE_DELEGATE_BASE_URL:
      process.env.PUBLIC_W3_STORAGE_DELEGATE_BASE_URL,
    PUBLIC_WALLET_CONNECT_PROJECT_ID:
      process.env.PUBLIC_WALLET_CONNECT_PROJECT_ID,
    PUBLIC_LOG_LEVEL: process.env.PUBLIC_LOG_LEVEL,
    PUBLIC_API_STATUS_PATH: process.env.PUBLIC_API_STATUS_PATH,
    PUBLIC_PUSH_PROTOCOL_CHANNEL_ID:
      process.env.PUBLIC_PUSH_PROTOCOL_CHANNEL_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    appIsrStatus: false,
  },
  async headers() {
    return [
      {
        locale: false,
        source: "/(.*)",
        headers: createSecureHeaders({
          frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }),
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/home",
        permanent: false,
      },
    ];
  },
};

export default bundleAnalyzerConfig(nextConfig);
