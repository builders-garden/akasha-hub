import {
  Page,
  PageHeader,
  PagePrimaryBar,
  PageBody,
  PageTitle,
} from "@/components/ui/page";

import { TransitionProvider } from "@/hooks/use-transition-context";
import React from "react";
import { type Metadata } from "next";
import { createTitle } from "@/lib/utils";
import { SettingsPage } from "@/components/app/settings/settings-page";

export const metadata: Metadata = {
  title: createTitle("Settings"),
};

export default function Settings() {
  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <div className="flex flex-row items-center gap-1">
              <PageTitle>Settings</PageTitle>
            </div>
          </PagePrimaryBar>
        </PageHeader>
        <PageBody className="md:w-[628px]">
          <React.Suspense>
            <SettingsPage />
          </React.Suspense>
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
