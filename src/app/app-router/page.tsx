"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import { QueryTestComponent } from "@/components/QueryTestComponent";

export default function Page() {
  return (
    <div>
      <QueryTestComponent />
      <ConnectWallet />
    </div>
  );
}
