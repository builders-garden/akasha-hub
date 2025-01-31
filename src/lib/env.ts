import { z } from "zod";

import { createEnv } from "@t3-oss/env-nextjs";

// https://create.t3.gg/en/usage/env-variables
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z.string().trim().min(1),
    PUBLIC_CERAMIC_API_ENDPOINT: z.string().url().min(1),
    PUBLIC_GRAPHQL_URI: z.string().url().min(1),
    PUBLIC_INDEXING_DID: z.string().trim().min(1),
    PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string().trim().min(1),
    PUBLIC_W3_STORAGE_DELEGATE_BASE_URL: z.string().url().min(1),
    PUBLIC_PUSH_PROTOCOL_CHANNEL_ID: z.string().trim().min(1),
    PUBLIC_LOG_LEVEL: z
      .enum(["info", "debug", "error"])
      .optional()
      .default("error"),
    PUBLIC_API_STATUS_PATH: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_PRIVY_APP_ID: z.string(),
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string(),
    NEXT_PUBLIC_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    // Client
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,

    // Server
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    PUBLIC_CERAMIC_API_ENDPOINT: process.env.PUBLIC_CERAMIC_API_ENDPOINT,
    PUBLIC_GRAPHQL_URI: process.env.PUBLIC_GRAPHQL_URI,
    PUBLIC_INDEXING_DID: process.env.PUBLIC_INDEXING_DID,
    PUBLIC_WALLET_CONNECT_PROJECT_ID:
      process.env.PUBLIC_WALLET_CONNECT_PROJECT_ID,
    PUBLIC_W3_STORAGE_DELEGATE_BASE_URL:
      process.env.PUBLIC_W3_STORAGE_DELEGATE_BASE_URL,
    PUBLIC_PUSH_PROTOCOL_CHANNEL_ID:
      process.env.PUBLIC_PUSH_PROTOCOL_CHANNEL_ID,
    PUBLIC_LOG_LEVEL: process.env.PUBLIC_LOG_LEVEL,
    PUBLIC_API_STATUS_PATH: process.env.PUBLIC_API_STATUS_PATH,
  },
});
