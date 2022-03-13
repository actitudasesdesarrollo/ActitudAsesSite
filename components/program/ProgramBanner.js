const ProgramBanner = ({ title, banner_image }) => {
	return (
		<section>
			<article>
				<figure>
					<div className="opacity"></div>
				</figure>
				<div className="container">
					<div>
						<h1 className="title blackBackgroundTitle">{title}</h1>
					</div>
				</div>
			</article>
			<style jsx>{`
				section {
					height: 50vh;
					overflow: hidden;
				}

				article {
					height: 100%;
					overflow: hidden;
				}

				figure {
					position: absolute;
					overflow: hidden;
					left: 0;
					top: 7vh;
					width: 100vw;
					height: 50vh;
					z-index: 0;
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					background-image: url(${banner_image?.url});
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.title {
					text-align: left;
					width: 100%;
				}

				.container {
					position: relative;
					display: flex;
					flex-flow: column nowrap;
					height: 100%;
					width: 100%;
					justify-content: space-evenly;
					z-index: 2;
					color: white;
				}

				.buttonsContainer {
					display: flex;
					justify-content: space-between;
				}

				.opacity {
					background: rgb(255, 255, 255);
					background: linear-gradient(
						270deg,
						rgba(255, 255, 255, 0) 0%,
						rgba(0, 0, 0, 0.5) 40%,
						rgba(0, 0, 0, 0.7) 80%
					);
					width: 100%;
					height: 100%;
					z-index: 2;
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
						height: 40vh;
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

export default ProgramBanner;
