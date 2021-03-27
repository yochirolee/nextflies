import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export const siteTitle = "Nextflies";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useContext(SearchContext);
  const inputRef = useRef();

  const handleSearch = (e) => {
    if (search.length > 0) router.push("/search");
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    inputRef.current.focus();
    const delayDebounceFn = setTimeout(() => {
      if (search.length === 0 && router.pathname === "/search")
        router.push("/");
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <>
      <Head>
      <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build something like Neflix"
        />
        <meta name="og:title" content={siteTitle} />
     
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="flex flex-row items-center z-20 justify-between h-14 px-10 fixed w-full text-white bg-gray-800 bg-opacity-70 ">
        <Link href="/">
          <div className="md:flex flex-row items-center hidden   ">
           
            <p className="hidden md:block px-2 text-lg cursor-pointer ">
              Nextflies
            </p>
          </div>
        </Link>

        <div className="relative">
          <input
            onChange={(e) => handleSearch(e)}
            id="search"
            ref={inputRef}
            placeholder="Search"
            value={search}
            className="w-64 pl-5 pr-10 rounded-md h-10 border  opacity-70 bg-transparent focus:outline-none "
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentcolor"
            className="absolute  h-6 w-6 top-2 right-2 text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <p>Others</p>
      </nav>
    </>
  );
}
