import Head from "next/head";
import Home from "../component/Home";
import Liff_Profile from "../component/Liff_Profile";

export default function Profile() {
  return (
    <section>
      <Head>
        <title> My liff_demo </title>
      </Head>
      <Home />
      <Liff_Profile />
    </section>
  );
}
