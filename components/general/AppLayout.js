import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

import { MenuContextProvider } from "../../contexts/MenuContext";

const AppLayout = ({ children }) => {
	useEffect(async () => {
		await axios.get("/api/cron");
	}, []);

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="title" content="Actitud Ases" />
				<link
					rel="canonical"
					href="https://actitud-ases-server.herokuapp.com/"
				/>
				<meta
					name="description"
					content="Ases una escuela de comunicación Interpersonal y habilidades sociales, Consultoría y Mentoring en Transformación Personal."
				/>

				{/* Open Graphs */}
				<meta property="og:title" content="Actitud Ases" />
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://actitud-ases-server.herokuapp.com/"
				/>
				<meta
					property="og:description"
					content="Ases una escuela de comunicación Interpersonal y habilidades sociales, Consultoría y Mentoring en Transformación Personal."
				/>
				<meta
					property="og:image"
					content="https://actitud-ases-server.herokuapp.com/assets/images/logo.webp"
				/>

				{/* Twitter */}
				<meta name="twitter:card" content="summary" />
				<meta
					name="twitter:url"
					content="https://actitud-ases-server.herokuapp.com/"
				/>
				<meta name="twitter:title" content="Actitud Ases" />
				<meta name="twitter:site" content="@rustyases" />
				<meta
					name="twitter:description"
					content="Somos Ases una escuela de comunicación Interpersonal y habilidades sociales, Consultoría y Mentoring en Transformación Personal."
				/>
				<meta
					name="twitter:image"
					content="https://actitud-ases-server.herokuapp.com/assets/images/logo.webp"
				/>

				<link rel="icon" href="/assets/icons/favicon/favicon.ico" />
				<link rel="profile" href="http://gmpg.org/xfn/11" />
				<link rel="manifest" href="/assets/icons/favicon/manifest.json" />
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/assets/icons/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/assets/icons/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/assets/icons/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/assets/icons/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/assets/icons/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/assets/icons/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/assets/icons/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/assets/icons/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/assets/icons/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/assets/icons/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<script type="application/ld+json">
					{`{
						"@context": "http://schema.org",
						"@type" : "Article",
						"name" : "Actitud Ases",
						"articleSection" : [ "[Desafío de 30 días] Desafío de 30 días", "[Date Coach] Date Coach", "[Desafío de 90 días] Desafío de 90 días" ],
						"image": "https://actitud-ases-server.herokuapp.com/assets/images/logo.svg",
						"description": "Somos Ases una escuela de comunicación Interpersonal y habilidades sociales. Llevamos haciendo Consultoría y Mentoring en Transformación Personal por más de 10 años, si llegaste hasta este punto es porque estás buscando crecer más y nosotros te vamos ayudar.",
						"url": "https://actitud-ases-server.herokuapp.com/",
						"brand": {
							"@type": "Brand",
							"name": "Actitud Ases",
							"logo": "https://actitud-ases-server.herokuapp.com/assets/images/ases-full-logo.webp"
						},
						"sameAs" : [
							"https://twitter.com/rustyases",
							"https://www.facebook.com/actitudases/?ref=aymt_homepage_panel",
							"https://www.youtube.com/channel/UCfKv4PLkux7-J3FhO77QgqA",
							"https://instagram.com/RustyAses"
						]
					}`}
				</script>
				<script
					type="text/javascript"
					defer
					src="https://www.google-analytics.com/analytics.js"
				></script>
				<script defer src="//www.google-analytics.com/analytics.js"></script>

				<title>Actitud Ases</title>
			</Head>
			<MenuContextProvider>
				<Header />
				<main>{children}</main>
				<Footer />
			</MenuContextProvider>
		</>
	);
};

export default AppLayout;
