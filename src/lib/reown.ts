import { mainnet } from "@reown/appkit/networks";
import { arbitrum } from "@reown/appkit/networks";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

export const provider = async () => {
  const p = await EthereumProvider.init({
    projectId: process.env.PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    metadata: {
      name: "Akasha Hub",
      description: "Akasha Hub",
      url: "http://localhost:3000", // origin must match your domain & subdomain
      icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
    showQrModal: true,
    optionalChains: [mainnet.id, arbitrum.id],

    /*Optional - Add custom RPCs for each supported chain*/
    rpcMap: {
      1: "https://ethereum-rpc.publicnode.com",
    },
  });
  return p;
};
