import type { NextConfig } from "next";

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
};

export default nextConfig;
