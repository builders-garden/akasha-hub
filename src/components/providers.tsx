"use client";

import { wagmiAdapter, projectId } from "@/lib/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { sepolia } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { env } from "@/lib/env";
// import { CloudAuthSIWX } from "@reown/appkit-siwx";

// Set up queryClient
const queryClient = new QueryClient();

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [sepolia],
  defaultNetwork: sepolia,
  metadata: {
    name: "Akasha Hub",
    description: "Login to Akasha Hub",
    url: env.NEXT_PUBLIC_BASE_URL,
    icons: [],
  },
  features: {
    socials: ["google", "farcaster", "github", "apple"],
    email: true,
    analytics: true,
  },
  enableAuthLogger: true,
  enableWallets: false,
  enableWalletConnect: true,
  debug: true,
  // siwx: new CloudAuthSIWX(),
});

export function Providers({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
