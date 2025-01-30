import * as React from "react";

import { Separator } from "@/components/ui/separator";
import {
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger,
  UnderlinedTabsWithQueryState,
} from "@/components/ui/tabs";
import type { HubDto } from "@/types/dtos/hub-dto";
import { DiscussionTab } from "./tabs/discussion-tab";
import { InfoTab } from "./tabs/info-tab";
import { AnnouncementsTab } from "./tabs/announcements-tab";

enum Tab {
  Discussion = "discussion",
  Announcements = "announcements",
  Info = "info",
}

const tabList = [
  {
    label: "Discussion",
    value: Tab.Discussion,
  },
  {
    label: "Announcements",
    value: Tab.Announcements,
  },
  {
    label: "Info",
    value: Tab.Info,
  },
];

export type HubTabsProps = {
  hub: HubDto;
};

export async function HubTabs({
  hub,
}: HubTabsProps): Promise<React.JSX.Element> {
  return (
    <div>
      <div className="mb-6 space-y-4 px-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-full bg-muted" />
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{hub.name}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{hub.location}</span>
              <span>•</span>
              <span>{hub.memberCount} Members</span>
            </div>
          </div>
        </div>
        <button className="w-full rounded-full border px-4 py-2 hover:bg-accent">
          You are a member
        </button>
      </div>

      <UnderlinedTabsWithQueryState
        queryKey="tab"
        defaultValue={Tab.Discussion}
        className="flex size-full flex-col"
      >
        <div className="flex flex-row items-center justify-between pr-2">
          <UnderlinedTabsList className="h-12 max-h-12 min-h-12 gap-x-2 overflow-x-auto border-none px-4">
            {tabList.map((item) => (
              <UnderlinedTabsTrigger
                key={item.value}
                value={item.value}
                className="mx-0 border-t-4 border-t-transparent"
              >
                <div className="flex flex-row items-center gap-2 rounded-md px-2 py-1 hover:bg-accent">
                  {item.label}
                </div>
              </UnderlinedTabsTrigger>
            ))}
          </UnderlinedTabsList>
        </div>

        <Separator />

        <UnderlinedTabsContent
          value={Tab.Discussion}
          className="m-0 p-0 md:grow md:overflow-hidden"
        >
          <React.Suspense>
            <DiscussionTab hub={hub} />
          </React.Suspense>
        </UnderlinedTabsContent>
        <UnderlinedTabsContent
          value={Tab.Announcements}
          className="m-0 p-0 md:grow md:overflow-hidden"
        >
          <React.Suspense>
            <AnnouncementsTab hub={hub} />
          </React.Suspense>
        </UnderlinedTabsContent>
        <UnderlinedTabsContent
          value={Tab.Info}
          className="m-0 p-0 md:grow md:overflow-hidden"
        >
          <React.Suspense>
            <InfoTab hub={hub} />
          </React.Suspense>
        </UnderlinedTabsContent>
      </UnderlinedTabsWithQueryState>
    </div>
  );
}
