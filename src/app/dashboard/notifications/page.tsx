import * as React from "react";
import { type Metadata } from "next";

import { NotificationsPage } from "@/components/home/notifications/notifications-page";
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
  title: createTitle("Notifications"),
};

export default function Notifications() {
  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <div className="flex flex-row items-center gap-1">
              <PageTitle>Notifications</PageTitle>
            </div>
          </PagePrimaryBar>
        </PageHeader>
        <PageBody>
          <React.Suspense>
            <NotificationsPage />
          </React.Suspense>
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
