import { MediaQueries } from "@/constants/media-queries";
import { ResponsiveScrollArea } from "@/components/ui/scroll-area";
import type { HubDto } from "@/types/dtos/hub-dto";
import React from "react";

export type AnnouncementsTabProps = {
  hub: HubDto;
};

export function AnnouncementsTab({
  hub,
}: AnnouncementsTabProps): React.JSX.Element {
  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="flex h-16 flex-row items-center justify-between gap-2 px-6">
        <h1 className="text-sm font-semibold">Announcements for {hub.name}</h1>
      </div>
    </ResponsiveScrollArea>
  );
}
