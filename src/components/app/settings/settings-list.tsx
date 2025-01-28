"use client";

import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { ReactElement } from "react";

interface SettingsListProps {
  settings: SettingsItemProps[];
}

export function SettingsList({ settings }: SettingsListProps) {
  return (
    <div className="flex flex-col divide-y-2 divide-gray-200">
      {settings.map((setting, index) => (
        <SettingsItem
          key={index}
          title={setting.title}
          icon={setting.icon}
          enabled={setting.enabled}
          onChangeHandler={setting.onChangeHandler}
          itemUrl={setting.itemUrl}
        />
      ))}
    </div>
  );
}

export interface SettingsItemProps {
  title: string;
  icon?: ReactElement;
  enabled?: boolean;
  onChangeHandler?: () => void;
  itemUrl?: string;
}

export function SettingsItem({
  title,
  icon,
  enabled,
  onChangeHandler,
  itemUrl,
}: SettingsItemProps) {
  if (itemUrl) {
    return (
      <Link href={itemUrl}>
        <div className="flex flex-row h-[80px] w-full items-center justify-between p-[10px]">
          <div className="flex flex-row items-center gap-[10px]">
            {icon}
            <p className="text-[20px] font-bold">{title}</p>
          </div>
          {enabled !== undefined && onChangeHandler !== undefined && (
            <Switch checked={enabled} onCheckedChange={onChangeHandler} />
          )}
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-row h-[80px] w-full items-center justify-between p-[10px]">
      <div className="flex flex-row items-center gap-[10px]">
        {icon}
        <p className="text-[20px] font-bold">{title}</p>
      </div>
      {enabled !== undefined && onChangeHandler !== undefined && (
        <Switch checked={enabled} onCheckedChange={onChangeHandler} />
      )}
    </div>
  );
}
