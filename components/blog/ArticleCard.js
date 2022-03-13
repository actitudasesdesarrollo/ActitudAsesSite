import Link from "next/link";

const ArticleCard = ({ title, description, card_image, uid }) => {
	return (
		<div className="card">
			<Link href={`/blog/${uid}`}>
				<a>
					<div className="textContainer">
						<figure>
							<img src={card_image.url} alt={card_image.alt} />
						</figure>
						<h3 className="subtitle">
							{Array.isArray(title) ? title[0].text : title}
						</h3>
						<p className="whiteBackgroundTextBody">
							{Array.isArray(description) ? description[0].text : description}
						</p>
					</div>
				</a>
			</Link>
			<style jsx>{`
				.card {
					width: 100%;
					height: 100%;
					background: white;
					transition: transform 0.3s;
				}
				.card:hover {
					transform: scale(1.1);
				}

				a {
					display: block;
					width: 100%;
					height: 100%;
				}

				figure {
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0.3;
					transform: translate(-2rem, -2rem);
					overflow: hidden;
				}

				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.textContainer {
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 2rem;
					gap: 2rem;
					height: 100%;
				}

				h3 {
					position: relative;
					font-size: 1.1rem;
					z-index: 4;
					opacity: 1;
				}

				p {
					position: relative;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					font-size: 1rem;
					text-overflow: ellipsis;
					overflow: hidden;
					z-index: 4;
					opacity: 1;
				}
			`}</style>
		</div>
	);
};

export default ArticleCard;
