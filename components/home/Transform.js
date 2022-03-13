import { useEffect, useState } from "react";

import ExperienceVideo from "./ExperienceVideo";

import Client from "../../utils/prismicHelpers";

const Transform = () => {
	const [transformInfo, setTransformInfo] = useState({});

	useEffect(() => {
		const getTransformInfo = async () => {
			const { data } = await Client().getSingle("transform_section");

			setTransformInfo(data);
		};

		getTransformInfo();
	}, []);
	return (
		<section>
			<article>
				<div className="videoContainer">
					<ExperienceVideo {...transformInfo?.video?.[0]} />
				</div>
				<div>
					<h2 className="blackBackgroundTitle">{transformInfo?.title}</h2>
					<p className="whiteBackgroundTextBody">{transformInfo?.text}</p>
				</div>
			</article>
			<style jsx>{`
				section {
					background-image: url("/assets/images/background/dark-background.webp");
					background-size: cover;
					transition: opacity 0.5s;
					opacity: ${transformInfo?.video ? "1" : "0"};
					min-height: ${!transformInfo?.video ? "45vh" : "0"};
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					height: 50vh;
					gap: 10vw;
					padding: 8vh 0;
				}

				h2 {
					font-size: 1.5rem;
					text-transform: uppercase;
					color: white;
					width: 100%;
					text-align: left;
					font-weight: 400;
				}

				p {
					font-size: 1rem;
					color: var(--black-background-text-body);
				}

				div {
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					height: 100%;
					width: 100%;
					gap: 2rem;
					flex-grow: 1;
				}

				.videoContainer {
					max-width: 50%;
				}

				@media (max-width: 500px) {
					h2 {
						font-size: 2.5rem;
						text-align: center;
					}

					article {
						flex-direction: column-reverse;
						height: unset;
						text-align: center;
					}

					.videoContainer {
						max-width: 100%;
					}
				}
			`}</style>
		</section>
	);
};

export default Transform;
