import "../styles/globals.css";
import Head from "next/head";
import Footer from "../contaniners/Footer/footer";
import Header from "../contaniners/Header/header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
