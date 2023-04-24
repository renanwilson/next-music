import Head from "next/head";
import { HomePage } from "./Home/HomePage";
import { Base } from "template/base/base";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <HomePage />
    </>
  );
}
