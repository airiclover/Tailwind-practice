import Head from "next/head";
import { Concept } from "../components/Concept";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>airi's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Concept />
      <Profile />
    </div>
  );
}
