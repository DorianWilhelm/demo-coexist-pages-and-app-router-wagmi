"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import { PrivyLogin } from "@/components/PrivyLogin";

export default function Page() {
  return (
    <div>
      <ConnectWallet />
      <PrivyLogin />
    </div>
  );
}
