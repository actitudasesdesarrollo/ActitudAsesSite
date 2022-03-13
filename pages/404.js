import Head from "next/head";

const error404 = () => {
	return (
		<div className="container">
			<Head>
				<title>Actitud Ases - Error 404</title>
			</Head>
			<div className="headerBackground"></div>
			<section>
				<article>
					<h1 className="whiteBackgroundTitle">404</h1>
					<p className="whiteBackgroundTitle">
						La página solicitada no existe.
					</p>
				</article>
			</section>
			<div className="footerBackground"></div>
			<style jsx>{`
				.container {
					flex-direction: column;
					height: 93vh;
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
					position: absolute;
					bottom: 0;
					z-index: 3;
				}
				section {
					background: var(--light-grey-background);
					padding-bottom: 8vh;
					height: 83vh;
				}

				article {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					gap: 8vh;
				}

				h1 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
					font-size: 3rem;
				}

				p {
					color: var(--hover-button-red);
					font-size: 1.5rem;
				}

				@media (max-width: 500px) {
					.container {
						height: 100vh;
					}
					h1 {
						font-size: 2.5rem;
					}
					section {
						padding-top: 8vh;
					}
					.footerBackground {
						height: 20vh;
					}
				}
			`}</style>
		</div>
	);
};

export default error404;
