import Link from "next/link";
const Logo = ({ full }) => {
	return (
		<figure>
			<Link href="/">
				<a>
					<img
						src={
							full === "true"
								? "/assets/images/ases-full-logo.webp"
								: "/assets/images/logo.svg"
						}
						alt="Actitud Ases"
					/>
				</a>
			</Link>
			<style jsx>{`
				figure {
					position: relative;
					z-index: 6;
					height: 90%;
				}

				a {
					display: block;
					height: 100%;
					display: flex;
					align-items: center;
				}

				img {
					height: 130%;
					width: 100%;
					object-fit: contain;
				}
			`}</style>
		</figure>
	);
};

export default Logo;
