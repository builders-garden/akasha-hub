"use client";

import { env } from "@/lib/env";
import { PrivyProvider } from "@privy-io/react-auth";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["email", "wallet", "google", "apple", "farcaster"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          // logo: "https://google.com",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};
