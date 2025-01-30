import * as React from "react";
import { type Metadata } from "next";
import Link from "next/link";
import { BellIcon, InfoIcon } from "lucide-react";

import { HomeSpinner } from "@/components/home/home-spinner";
import { buttonVariants } from "@/components/ui/button";
import {
  Page,
  PageActions,
  PageBody,
  PageHeader,
  PagePrimaryBar,
  PageTitle,
} from "@/components/ui/page";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TransitionProvider } from "@/hooks/use-transition-context";
import { createTitle } from "@/lib/utils";
import { Routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: createTitle("Home"),
};

export type HomeLayoutProps = {
  hero: React.ReactNode;
  myHubs: React.ReactNode;
  exploreHubs: React.ReactNode;
};

export default function HomeLayout({
  hero,
  myHubs,
  exploreHubs,
}: HomeLayoutProps): React.JSX.Element {
  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <div className="flex flex-row items-center gap-1">
              <PageTitle>Akasha Hub</PageTitle>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <InfoIcon className="size-3 shrink-0 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>Akasha Hub homepage</TooltipContent>
              </Tooltip>
            </div>
            <PageActions>
              <Link
                href={Routes.Notifications}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <BellIcon className="size-4 shrink-0" />
                <span className="sr-only">Notifications</span>
              </Link>
            </PageActions>
          </PagePrimaryBar>
        </PageHeader>
        <PageBody>
          <div className="mx-auto">
            {hero}
            <div className="bg-white text-black border-t-2 border-transparent rounded-xl -mt-4 flex flex-col gap-2 sm:gap-8 px-2">
              {myHubs}
              {exploreHubs}
            </div>
          </div>
          <HomeSpinner />
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
