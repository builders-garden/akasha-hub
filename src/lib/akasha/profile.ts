/* eslint-disable @typescript-eslint/no-explicit-any */
import { AkashaProfile } from "@akashaorg/typings/lib/ui";
import akashaSdk from "@/lib/akasha/akasha";
import { SetOptionsInput } from "@akashaorg/typings/lib/sdk/graphql-types-new";

export async function getProfileByDid(did: string): Promise<{
  akashaProfile: AkashaProfile;
  isViewer: boolean;
} | null> {
  const profile = await akashaSdk.services.gql.client.GetProfileByDid({
    id: did,
  });
  if (JSON.stringify(profile.node) === "{}" || profile.node === undefined) {
    return null;
  }
  return profile?.node as {
    akashaProfile: AkashaProfile;
    isViewer: boolean;
  };
}

/**
 * Get the user profile using the SDK context
 */
export async function getUserProfile() {
  const profile = await akashaSdk.services.gql.client.GetMyProfile();
  return profile.viewer?.akashaProfile ?? null;
}

export async function getProfileById(
  id: string
): Promise<AkashaProfile | null> {
  const profile = await akashaSdk.services.gql.client.GetProfileByID({
    id,
  });
  if (!profile || !profile.node || Object.keys(profile.node).length === 0) {
    return null;
  }
  return profile.node as AkashaProfile;
}

export async function getProfileStatsByDid(did: string): Promise<any | null> {
  const profileStats = await akashaSdk.services.gql.client.GetProfileStatsByDid(
    {
      id: did,
    }
  );
  if (
    !profileStats ||
    !profileStats.node ||
    Object.keys(profileStats.node).length === 0
  ) {
    return null;
  }
  return profileStats.node;
}

export async function createProfile(
  profile: any,
  appID: string,
  appVersionID: string,
  clientMutationId?: string,
  options?: SetOptionsInput
) {
  const createProfileResponse =
    await akashaSdk.services.gql.client.CreateProfile(
      {
        i: {
          clientMutationId: clientMutationId,
          content: {
            appID,
            appVersionID,
            createdAt: new Date().toISOString(),
            ...profile,
          },
          options: options,
        },
      },
      {
        context: { source: akashaSdk.services.gql.contextSources.composeDB },
      }
    );

  return createProfileResponse.setAkashaProfile;
}
