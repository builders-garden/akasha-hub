import { PageTitle } from "@/components/app/page-title";
import { EditProfilePage } from "@/components/app/profile/edit-profile-page";

export default function Profile() {
  const profile = {
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
    <div className="flex flex-col py-8 px-4 gap-2">
      <PageTitle title="Profile" />
      <EditProfilePage profile={profile} />
    </div>
  );
}
