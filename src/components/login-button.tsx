"use client";

import { useCallback } from "react";
import { env } from "@/lib/env";

import akashaSdk from "@/lib/akasha/akasha";

function LoginButton() {
  const loginAkasha = useCallback(async () => {
    try {
      akashaSdk.services.common.web3.updateModalOptions({
        projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
        enableWallets: false,
        enableWalletConnect: false,
        features: {
          socials: ["google", "farcaster", "github", "apple"],
          email: true,
          analytics: true,
        },
        debug: true,
        metadata: {
          name: "Akasha Hub",
          description: "Login to Akasha Hub",
          url: env.NEXT_PUBLIC_BASE_URL,
          icons: [],
        },
      });

      try {
        const authRes = await akashaSdk.api.auth.signIn({
          checkRegistered: false,
          resumeSignIn: false,
        });
        console.log("authRes", authRes);
      } catch (e) {
        console.error("Error logging in to Akasha", e);
      }
    } catch (error) {
      console.error("Error modal options", error);
    }
  }, []);

  return (
    <>
      <button
        onClick={loginAkasha}
        className="bg-primary text-white rounded-full px-4 py-2"
      >
        Login
      </button>
    </>
  );
}

export default LoginButton;
