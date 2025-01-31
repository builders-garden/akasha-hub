"use client";

import { PageTitle } from "@/components/app/page-title-old";
import {
  SettingsItemProps,
  SettingsList,
} from "@/components/app/settings/settings-list";
import { useState } from "react";

export default function NotificationsSettings() {
  const [announcements, setAnnouncements] = useState(false);
  const [posts, setPosts] = useState(false);
  const [comments, setComments] = useState(false);

  const handleAnnouncements = () => setAnnouncements(!announcements);
  const handlePosts = () => setPosts(!posts);
  const handleComments = () => setComments(!comments);

  const settings: SettingsItemProps[] = [
    {
      title: "Announcements",
      enabled: announcements,
      onChangeHandler: handleAnnouncements,
    },
    {
      title: "Posts",
      enabled: posts,
      onChangeHandler: handlePosts,
    },
    {
      title: "Comments on your posts",
      enabled: comments,
      onChangeHandler: handleComments,
    },
  ];

  return (
    <div className="flex flex-col py-[40px] px-[24px] gap-[32px]">
      <PageTitle title="Notifications settings" />
      <SettingsList settings={settings} divide={false} />
    </div>
  );
}
