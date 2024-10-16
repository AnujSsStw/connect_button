import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const account = useAccount();

  console.log(account.address);
  return (
    <div>
      <main>content</main>
    </div>
  );
};

export default Home;
