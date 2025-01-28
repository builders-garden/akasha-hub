"use client";

import { PageTitle } from "@/components/app/page-title";
import {
  SettingsItemProps,
  SettingsList,
} from "@/components/app/settings/settings-list";
import { useState } from "react";

export default function Settings() {
  const [themeEnabled, setThemeEnabled] = useState(false);

  function handleThemeChange() {
    console.log("Theme changed");
    setThemeEnabled(!themeEnabled);
  }

  const settings: SettingsItemProps[] = [
    {
      title: "Notifications",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      itemUrl: "/home/settings/notifications",
    },
    {
      title: "Theme",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      enabled: themeEnabled,
      onChangeHandler: handleThemeChange,
    },
  ];

  return (
    <div className="flex flex-col py-[40px] px-[24px] gap-[32px]">
      <PageTitle title="Settings" />
      <SettingsList settings={settings} />
    </div>
  );
}
