import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { sepolia } from "@reown/appkit/networks";
import { env } from "./env";

// Get projectId from https://cloud.reown.com
export const projectId = env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

export const networks = [sepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
