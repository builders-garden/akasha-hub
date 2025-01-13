"use client";

import { usePrivy } from "@privy-io/react-auth";

function LoginButton() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  return (
    <>
      {authenticated ? (
        <div className="flex flex-row items-center gap-2">
          <p>
            Hi{" "}
            <span className="text-sm bg-slate-400 text-black p-2 rounded-lg">
              {user?.email?.address}
            </span>
          </p>
          <button
            onClick={logout}
            className="bg-red-700 text-white rounded-lg px-2 py-1"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          disabled={disableLogin}
          onClick={login}
          className="bg-blue-700 text-white rounded-lg px-2 py-1"
        >
          Privy Login
        </button>
      )}
    </>
  );
}

export default LoginButton;
