import Head from "next/head";
import { HomePage } from "../template/Home/HomePage";

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
