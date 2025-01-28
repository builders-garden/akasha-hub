interface EditProfilePageProps {
  profile: {
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
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={profile.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={profile.lastname}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={profile.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={profile.username}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="identities">Identities</label>
          <ul className="flex flex-col gap-2">
            {profile.identities.map((identity, index) => (
              <li key={index}>
                <span>{identity.provider}</span>
                <span>{identity.address}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
