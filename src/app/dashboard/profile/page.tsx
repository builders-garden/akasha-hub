import * as React from "react";
import { type Metadata } from "next";

import { EditProfilePage } from "@/components/home/profile/edit-profile-page";
import {
  Page,
  PageHeader,
  PagePrimaryBar,
  PageBody,
  PageTitle,
} from "@/components/ui/page";

import { TransitionProvider } from "@/hooks/use-transition-context";
import { createTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: createTitle("Profile"),
};

export default function Profile() {
  const profile = {
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    identities: [
      {
        provider: "evm",
        address: "0x1234567890abcdef",
      },
    ],
  };

  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <div className="flex flex-row items-center gap-1">
              <PageTitle>Your profile</PageTitle>
            </div>
          </PagePrimaryBar>
        </PageHeader>
        <PageBody>
          <React.Suspense>
            <EditProfilePage profile={profile} />
          </React.Suspense>
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
