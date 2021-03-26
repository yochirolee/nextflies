import Head from "next/head";
import Header from "../contaniners/Header/header";
import Footer from "../contaniners/Footer/footer";

export const siteTitle = "Nextflies";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build something like Neflix"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
