import { provider } from "@/lib/reown";
import { create } from "zustand";

interface AkashaAuthState {
  currentAkashaUser: {
    id?: string;
    ethAddress?: string;
    isNewUser: boolean;
  } | null;
  loginAkasha: () => Promise<void>;
}

export const useAkashaAuthStore = create<AkashaAuthState>((set) => ({
  currentAkashaUser: null,
  currentAkashaUserStats: null,
  loginAkasha: async () => {
    console.log("login to akasha");
    try {
      // Dynamically import akashaSdk only when needed
      const { default: akashaSdk } = await import("@/lib/akasha/akasha");

      const authRes = await akashaSdk.api.auth.signIn({
        provider: await provider(), // 1 = None, 2 = Web3Injected, 3 = WalletConnect, 4 = FallbackProvider
        checkRegistered: false,
        resumeSignIn: false,
      });

      set({
        currentAkashaUser: authRes.data,
      });
    } catch (error) {
      console.error("Error logging in to Akasha", error);
    }
  },
}));
