import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

import ArticleBanner from "../../components/blog/ArticleBanner";
import ArticleBody from "../../components/blog/ArticleBody";

import Client from "../../utils/prismicHelpers";

const ArticlesPage = () => {
	const [currentArticle, setCurrentArticle] = useState({});

	const router = useRouter();
	const { article } = router.query;

	useEffect(() => {
		const getArticle = async (articleToGet) => {
			const response = await Client().getByUID("article", articleToGet);

			setCurrentArticle(response?.data);
		};

		getArticle(article);
	}, [article]);

	return (
		<div className="container">
			<Head>
				<title>
					Actitud Ases
					{currentArticle?.title
						? ` - ${Array.isArray(currentArticle?.title)
							? currentArticle?.title[0].text
							: currentArticle?.title
						}`
						: ""}
				</title>
			</Head>
			<div className="headerBackground"></div>
			<ArticleBanner {...currentArticle} />
			<ArticleBody
				article={currentArticle?.body}
				title={
					Array.isArray(currentArticle?.title)
						? currentArticle?.title[0].text
						: currentArticle?.title
				}
			/>
			<div className="footerBackground"></div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
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
					position: relative;
					bottom: 0;
					z-index: 3;
				}

				@media (max-width: 500px) {
					.footerBackground {
						height: 20vh;
					}
				}
			`}</style>
		</div>
	);
};

export default ArticlesPage;
