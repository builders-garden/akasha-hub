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

  const logoutAkasha = useCallback(async () => {
    try {
      const logoutRes = await akashaSdk.api.auth.signOut();
      console.log("logoutRes", logoutRes);
    } catch (e) {
      console.error("Error logging out of Akasha", e);
    }
  }, []);

  // const getParams = useCallback(async () => {
  //   const currentUser = await akashaSdk.api.auth.getCurrentUser();
  //   const session = await akashaSdk.api.auth.getSession();

  //   console.log({
  //     currentUser,
  //     session,
  //   });

  //   const signResult = await akashaSdk.api.auth.signData(
  //     "testing signature"
  //   );
  //   console.log("signResult", signResult);
  //   const profile = await akashaSdk.services.gql.client.GetMyProfile();
  //   console.log("profile", profile);
  //   if (profile.viewer === null) {
  //     console.log("profile not found, creating ...");
  //     const createdProfile = await akashaSdk.services.gql.client.CreateProfile(
  //       {
  //         i: {
  //           clientMutationId: `create-profile-${new Date().toISOString()}`,
  //           content: {
  //             appID: `1`,
  //             appVersionID: `1`,
  //             createdAt: new Date().toISOString(),
  //             name: "Ernest Anaranja",
  //           },
  //         },
  //       },
  //       {
  //         context: { source: akashaSdk.services.gql.contextSources.composeDB },
  //       }
  //     );
  //     console.log("createdProfile", createdProfile);
  //   }
  // }, []);

  return (
    <>
      <button
        onClick={loginAkasha}
        className="bg-primary text-white rounded-full px-4 py-2"
      >
        Login
      </button>
      <button
        onClick={logoutAkasha}
        className="bg-primary text-white rounded-full px-4 py-2"
      >
        Logout
      </button>
      {/*<button
        onClick={getParams}
        className="bg-primary text-white rounded-full px-4 py-2"
      >
        Get Params
      </button>*/}
    </>
  );
}

export default LoginButton;
