"use client";
import { ConnectWallet } from "@/components/ConnectWallet";

export async function getServerSideProps() {
  return { props: {} };
}

export default function Page() {
  return (
    <div>
      <ConnectWallet />
    </div>
  );
}
