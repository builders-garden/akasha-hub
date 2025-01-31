"use client";

import { useState } from "react";
import { SettingsItemProps, SettingsList } from "./settings-list";

export function SettingsPage() {
  const [themeEnabled, setThemeEnabled] = useState(false);

  function handleThemeChange() {
    console.log("Theme changed");
    setThemeEnabled(!themeEnabled);
  }

  const settings: SettingsItemProps[] = [
    {
      title: "Notifications",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      itemUrl: "/dashboard/settings/notifications",
    },
    {
      title: "Theme",
      icon: <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>,
      enabled: themeEnabled,
      onChangeHandler: handleThemeChange,
    },
  ];

  return (
    <div className="flex flex-col py-8 px-4 gap-2">
      <SettingsList settings={settings} />
    </div>
  );
}
