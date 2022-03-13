import { useEffect, useState } from "react";

import Client from "../../utils/prismicHelpers";

const Why = () => {
	const [whyInfo, setWhyInfo] = useState([]);

	useEffect(() => {
		const getWhyInfo = async () => {
			const {
				data: { body },
			} = await Client().getSingle("why_section");

			setWhyInfo(body);
		};

		getWhyInfo();
	}, []);
	return (
		<section id="nosotros">
			<article>
				<h2 className="whiteBackgroundTitle">¿Por qué Ases?</h2>
				<div className="text">
					{whyInfo?.map(({ slice_type, primary: content }, index) => {
						switch (slice_type) {
							case "title":
								return (
									<h3 key={`${slice_type}-${index}`} className="subtitle">
										{content.text}
									</h3>
								);
							case "paragraph":
								return (
									<p
										key={`${slice_type}-${index}`}
										className="whiteBackgroundTextBody"
									>
										{content.paragraph}
									</p>
								);
							default:
								return <></>;
						}
					})}
				</div>
			</article>
			<style jsx>{`
				section {
					background: var(--light-grey-background);
					transition: opacity 0.5s;
					opacity: ${whyInfo?.length ? "1" : "0"};
					min-height: ${!whyInfo?.length ? "80vh" : "0"};
				}
				article {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					gap: 8vh;
					padding: 8vh 0;
				}

				h2 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
				}

				span {
					display: block;
				}

				.darkRedText {
					color: var(--hover-button-red);
				}

				div {
					display: flex;
					width: max(40rem, 85%);
					height: 30vh;
					align-items: center;
				}

				.text {
					flex-direction: column;
					justify-content: space-between;
					height: 80%;
					align-items: flex-start;
					gap: 2rem;
				}

				h3 {
					font-size: 1.5rem;
					width: 100%;
				}

				p {
					width: 100%;
					align-self: flex-end;
					font-size: 1.2rem;
				}
				@media (max-width: 600px) {
					article {
						padding: 8vh 0;
					}

					h2 {
						font-size: 2.5rem;
					}

					div {
						flex-direction: column;
						height: unset;
						gap: 5vh;
					}

					.text {
						width: 90%;
						text-align: center;
					}

					p {
						width: 100%;
						align-self: unset;
					}
				}
			`}</style>
		</section>
	);
};

export default Why;
