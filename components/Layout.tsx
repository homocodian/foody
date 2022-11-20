import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Layout {
	title: string;
	attachNavbar?: boolean;
	attachFooter?: boolean;
	children: ReactNode;
}

function Layout({ title, attachNavbar, attachFooter, children }: Layout) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<title>{`Foody | ${title}`}</title>
			</Head>
			{attachNavbar && <Navbar />}
			{children}
			{attachFooter && <Footer />}
		</>
	);
}

export default Layout;
