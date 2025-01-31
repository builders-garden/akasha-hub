"use client";

import { EditProfileForm } from "./edit-profile-form";

interface EditProfilePageProps {
  profile: {
    avatar?: string;
    name: string;
    lastname: string;
    email: string;
    username: string;
    identities: {
      provider: string;
      address: string;
    }[];
  };
}

export function EditProfilePage({ profile }: EditProfilePageProps) {
  return (
    <div className="flex flex-col py-8 px-4 gap-2">
      <EditProfileForm profile={profile} />
    </div>
  );
}
