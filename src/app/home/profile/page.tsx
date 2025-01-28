import { PageTitle } from "@/components/app/page-title";
import { EditProfileForm } from "@/components/app/profile/edit-profile-form";

export default function Profile() {
  const profile = {
    avatar: "",
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    identities: [
      {
        provider: "evm",
        address: "0x1234567890abcdef",
      },
    ],
  };

  return (
    <div className="flex flex-col py-[40px] px-[24px] gap-[32px]">
      <PageTitle title="Profile" />
      <EditProfileForm profile={profile} />
    </div>
  );
}
