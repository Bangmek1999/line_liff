import { useEffect } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

import "../styles/globals.css";
import "../styles/styler.css";
import "../styles/bootstrap.min.css";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    const liff = (await import("@line/liff")).default;
    try {
      await liff.init({ liffId });
    } catch (error) {
      console.error("liff init error", error.message);
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  });

  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
