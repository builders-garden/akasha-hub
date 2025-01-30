import * as React from "react";
import { type Metadata } from "next";

import { ExploreHubsPage } from "@/components/home/hubs/explore-hubs-page";
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
  title: createTitle("Explore Hubs"),
};

export default function ExploreHubs() {
  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <div className="flex flex-row items-center gap-1">
              <PageTitle>Explore Hubs</PageTitle>
            </div>
          </PagePrimaryBar>
        </PageHeader>
        <PageBody>
          <React.Suspense>
            <ExploreHubsPage />
          </React.Suspense>
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
