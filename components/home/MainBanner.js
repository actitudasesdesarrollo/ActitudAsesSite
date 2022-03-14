import Link from "next/link";
import { useEffect, useState } from "react";

import Client from "../../utils/prismicHelpers";

const MainBanner = () => {
	const [bannerInfo, setBannerInfo] = useState({});

	useEffect(() => {
		const getBannerInfo = async () => {
			const { data } = await Client().getSingle("main_banner");

			setBannerInfo(data);
		};

		getBannerInfo();
	}, []);
	return (
		<section>
			<article>
				<figure></figure>
				<div className="container">
					<div>
						<h1 className="title blackBackgroundTitle">Actitud Ases</h1>
						<p className="title blackBackgroundTitle">{bannerInfo?.subtitle}</p>
					</div>
					<div className="buttonsContainer">
						<Link href="/#programas">
							<a>
								<button className="buttonFont">Programas</button>
							</a>
						</Link>
						<Link href="/blog">
							<a>
								<button className="buttonFont">Blog</button>
							</a>
						</Link>
					</div>
				</div>
			</article>
			<style jsx>{`
				section {
					height: 70vh;
					transition: opacity 0.5s;
					opacity: ${bannerInfo?.subtitle ? "1" : "0"};
				}

				article {
					height: 100%;
				}

				figure {
					position: absolute;
					left: 0;
					top: 0;
					width: 100vw;
					height: 77vh;
					z-index: 1;
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					${bannerInfo?.banner?.url
						? `background-image: url(${bannerInfo?.banner?.url});`
						: ""}
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.container {
					position: relative;
					display: flex;
					flex-flow: column nowrap;
					height: 100%;
					width: 40%;
					justify-content: space-evenly;
					z-index: 2;
					color: white;
				}

				.buttonsContainer {
					display: flex;
					justify-content: space-between;
				}

				a {
					width: 40%;
				}

				button {
					width: 100%;
				}
				@media (max-width: 600px) {
					section {
						margin-top: 7vh;
						height: 40vh;
					}
					figure {
						height: 47vh;
						background-position: right;
						width: 150vw;
						right: -50%;
						left: unset;
					}

					.container {
						width: 50%;
					}

					a {
						width: 100%;
					}

					.buttonsContainer {
						flex-direction: column;
						gap: 1rem;
					}

					.title {
						font-size: 2rem;
					}
				}
			`}</style>
		</section>
	);
};

export default MainBanner;
