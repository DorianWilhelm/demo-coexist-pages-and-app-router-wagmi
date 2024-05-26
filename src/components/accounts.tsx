"use client";
import { useAccount, useDisconnect } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <p>{address}</p>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
