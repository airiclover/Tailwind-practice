import Head from "next/head";
import { MainHeader } from "../components/MainHeader";
import { Top } from "../components/Top";
import { Concept } from "../components/Concept";
import { Profile } from "../components/Profile";
import { Service } from "../components/Service";
import { Portfolios } from "../components/Portfolios";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>airi's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <Top />
      <Concept />
      <Profile />
      <Service />
      <Portfolios />
      <Contact />
    </div>
  );
}
