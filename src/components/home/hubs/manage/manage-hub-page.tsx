"use client";
import { SettingsItem } from "@/components/app/settings/settings-list";
import { HubDto } from "@/types/dtos/hub-dto";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ManageHubPageProps {
  hub: HubDto;
}

export function ManageHubPage({ hub }: ManageHubPageProps) {
  const reviewItems = [
    {
      title: "User requests",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      itemUrl: `/dashboard/hubs/${hub.slug}/manage/user-requests`,
    },
    {
      title: "Members List",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      itemUrl: `/dashboard/hubs/${hub.slug}/manage/members`,
    },
  ];

  return (
    <div className="flex flex-col py-8 px-4 gap-[32px]">
      <h1 className="text-[28px] font-bold">Manage Hub</h1>

      <div className="w-full">
        <Select
          onValueChange={(value) => console.log(value)}
          defaultValue={hub.slug}
        >
          <SelectTrigger className="w-full font-bold h-[47px] text-[16px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={hub.slug}>{hub.name}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <h2 className="text-[21px] font-bold">To review</h2>
      <div className={`flex flex-col divide-y-2 divide-gray-200`}>
        {reviewItems.map((item, index) => (
          <SettingsItem
            key={index}
            title={item.title}
            icon={item.icon}
            itemUrl={item.itemUrl}
          />
        ))}
      </div>

      <hr />
    </div>
  );
}
