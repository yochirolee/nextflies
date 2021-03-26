import "../styles/globals.css";
import Head from "next/head";
import Footer from "../contaniners/Footer/footer";
import Header from "../contaniners/Header/header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Nextflies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Movies Info"></meta>
        <meta name="lang" content="us"></meta>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
