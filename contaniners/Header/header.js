import Head from "next/head";

export const siteTitle = "Nextflies";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build something like Neflix"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="flex flex-row items-center justify-between h-14 px-10 fixed w-full text-white bg-gray-300 bg-opacity-30 ">
        <p>Logo</p>
        <input
          id="search"
          className="w-64 rounded-md h-10 text-gray-700 "
        ></input>
        <p>Others</p>
      </nav>
    </>
  );
}
