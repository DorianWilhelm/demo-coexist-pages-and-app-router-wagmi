"use client";
import { useAccount } from "wagmi";
import { usePrivy } from "@privy-io/react-auth";

const ConnectButton = () => {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  return (
    <button disabled={disableLogin} onClick={login}>
      Log in
    </button>
  );
};

export const PrivyLogin = () => {
  const { authenticated, user } = usePrivy();
  const { address } = useAccount();
  if (!authenticated || !address) return <ConnectButton />;
  return (
    <div>
      {user?.id && <p>User {user?.id} is logged in.</p>}
      <p>Address: {address}</p>
    </div>
  );
};
