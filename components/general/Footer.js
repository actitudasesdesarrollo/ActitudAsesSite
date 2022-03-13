import Logo from "./Logo";

import { useMenuContext } from "../../contexts/MenuContext";

const Footer = () => {
	const { navBarClassActive } = useMenuContext();
	return (
		<footer>
			<div className="container">
				<div className="logoContainer">
					{navBarClassActive || <Logo full="true" />}
				</div>
				<div className="iconsContainer">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/actitudases/?ref=aymt_homepage_panel"
					>
						<img src="/assets/icons/facebook-icon.svg" alt="facebook" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/rustyases"
					>
						<img src="/assets/icons/twitter-icon.svg" alt="twitter" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://instagram.com/RustyAses"
					>
						<img src="/assets/icons/instagram-icon.svg" alt="instagram" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.youtube.com/channel/UCfKv4PLkux7-J3FhO77QgqA"
					>
						<img src="/assets/icons/youtube-icon.svg" alt="youtube" />
					</a>
				</div>
			</div>
			<style jsx>{`
				footer {
					position: absolute;
					bottom: 0;
					background: transparent;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 10vh;
					width: 100vw;
					z-index: 5;
				}

				.container {
					position: relative;
					width: 80%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 7vh;
					z-index: 5;
				}

				.logoContainer {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 4vw;
					height: 70%;
				}

				.containerContainer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
				}

				.socialTitle {
					display: flex;
					color: var(--black-background-text-body);
				}

				.iconsContainer {
					display: flex;
					gap: 1vh;
					height: 5vh;
					width: 17vh;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					opacity: 0.6;
				}

				a {
					display: block;
					height: 100%;
					width: 5vh;
				}

				@media (max-width: 500px) {
					footer {
						height: 20vh;
						flex-direction: column;
					}

					.container {
						width: 50%;
						height: 100%;
						flex-direction: column;
						justify-content: center;
						gap: 3vh;
					}

					.logoContainer {
						flex-direction: column;
						text-align: center;
						height: 30%;
					}

					.iconsContainer {
						width: 75%;
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
