import Head from "next/head";

import Articles from "../../components/blog/Articles";

export default function Blog() {
	return (
		<div className="container">
			<Head>
				<title>Actitud Ases - Blog</title>
			</Head>
			<div className="headerBackground"></div>
			<Articles />
			<div className="footerBackground"></div>
			<style jsx>{`
				.container {
					flex-direction: column;
				}

				.headerBackground {
					background: black;
					width: 100vw;
					height: 7vh;
					position: absolute;
					top: 0;
					z-index: 3;
				}

				.footerBackground {
					background: var(--grey-background);
					width: 100vw;
					height: 10vh;
					position: relative;
					bottom: 0;
					z-index: 3;
				}

				@media (max-width: 500px) {
					.footerBackground {
						height: 20vh;
					}
				}
			`}</style>
		</div>
	);
}
