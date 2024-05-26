"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import { PrivyLogin } from "@/components/PrivyLogin";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Page() {
  return (
    <div>
      <ConnectWallet />
      <PrivyLogin />
    </div>
  );
}
