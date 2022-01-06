import "../styles/index.css";
import type { AppProps } from "next/app";
import UserProvider from "@/utilities/context/userContext";
import SearchStateProvider from "@/utilities/context/searchContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <SearchStateProvider>
        <Component {...pageProps} />
      </SearchStateProvider>
    </UserProvider>
  );
}

export default MyApp;
