import Link from "next/link";

const ProgramCard = ({ title, description, card_image, uid }) => {
	return (
		<div className="card">
			<Link href={`/programas/${uid}`}>
				<a>
					<figure>
						<img src={card_image?.url} alt={card_image?.alt} />
					</figure>
					<div className="textContainer">
						<h3 className="subtitle">{title}</h3>
						<p className="whiteBackgroundTextBody">{description}</p>
					</div>
				</a>
			</Link>
			<style jsx>{`
				.card {
					width: 100%;
					height: 100%;
					background: white;
					transition: opacity 0.5s;
				}

				.card:hover {
					opacity: 0.8;
				}

				a {
					display: block;
					width: 100%;
					height: 100%;
				}

				figure {
					width: 100%;
					height: 50%;
				}

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}

				.textContainer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 2rem;
					gap: 2rem;
				}

				h3 {
					font-size: 1.2rem;
				}

				p {
					font-size: 1rem;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			`}</style>
		</div>
	);
};

export default ProgramCard;
