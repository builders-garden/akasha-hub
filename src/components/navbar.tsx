import Link from "next/link";
import LoginButton from "./login-button";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-secondary text-black rounded-full w-3/4 mx-auto my-2">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Akasha Hub</h1>
        </Link>
        <Link href="/home">Hub Space</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <LoginButton />
    </div>
  );
};
