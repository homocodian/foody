import type { AppProps } from "next/app";

import SearchStateProvider from "@/utilities/context/searchContext";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SearchStateProvider>
			<Component {...pageProps} />
		</SearchStateProvider>
	);
}

export default MyApp;
