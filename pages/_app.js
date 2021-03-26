import "../styles/globals.css";
import { SearchProvider } from "../contexts/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </div>
  );
}

export default MyApp;
