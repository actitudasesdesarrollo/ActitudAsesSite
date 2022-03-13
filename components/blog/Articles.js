import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";

import ArticleCard from "./ArticleCard";

import Client from "../../utils/prismicHelpers";

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const { results } = await Client().query(
				Prismic.Predicates.at("document.type", "article")
			);

			const formattedResults = await results.map(({ uid, data }) => {
				return { uid, ...data };
			});

			setArticles(formattedResults);
		};

		getArticles();
	}, []);
	return (
		<section>
			<article>
				<h1 className="whiteBackgroundTitle">Artículos</h1>
				<div>
					{articles.map((article) => (
						<ArticleCard key={article.uid} {...article} />
					))}
				</div>
			</article>
			<style jsx>{`
				section {
					background: var(--light-grey-background);
					padding-bottom: 8vh;
					min-height: 83vh;
				}

				article {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					gap: 8vh;
					padding: 8vh 0;
				}

				h1 {
					width: 100%;
					text-align: center;
					text-transform: uppercase;
				}

				span {
					color: var(--hover-button-red);
				}

				div {
					display: grid;
					grid-template-columns: repeat(
						auto-fill,
						minmax(min(20rem, 90vw), 1fr)
					);
					grid-template-rows: auto;
					gap: 2rem;
					width: 100%;
					opacity: ${articles?.length ? "1" : "0"};
					transition: opacity 0.5s;
				}

				@media (max-width: 700px) {
					h2 {
						font-size: 2.5rem;
					}
					section {
						padding-top: 8vh;
					}
				}
			`}</style>
		</section>
	);
};

export default Articles;
