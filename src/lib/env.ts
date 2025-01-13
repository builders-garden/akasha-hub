import { z } from "zod";

import { createEnv } from "@t3-oss/env-nextjs";

// https://create.t3.gg/en/usage/env-variables
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z.string().trim().min(1),
  },
  client: {
    NEXT_PUBLIC_PRIVY_APP_ID: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
  },
});
