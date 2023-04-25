import Head from "next/head";
import { HomePage } from "./Home/HomePage";

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
