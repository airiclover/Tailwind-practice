import Head from "next/head";
import { Top } from "../components/Top";
import { Concept } from "../components/Concept";
import { Profile } from "../components/Profile";
import { Service } from "../components/Service";

export default function Home() {
  return (
    <div>
      <Head>
        <title>airi's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
      <Concept />
      <Profile />
      <Service />
    </div>
  );
}
