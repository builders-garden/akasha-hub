"use client";

import { useCallback } from "react";

import akashaSdk from "@/lib/akasha/akasha";
import { modal } from "./providers";

function LoginButton() {
  const loginAkasha = useCallback(async () => {
    try {
      akashaSdk.services.common.web3.setModalInstance(modal);
      akashaSdk.services.common.web3.setConnectionFeatures(["email", "social"]);

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
