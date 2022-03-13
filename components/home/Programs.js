import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";

import ProgramCard from "./ProgramCard";

import Client from "../../utils/prismicHelpers";

const Programs = () => {
	const [programs, setPrograms] = useState([]);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getPrograms = async () => {
			try {
				setIsError(false);
				const { results } = await Client().query(
					Prismic.Predicates.at("document.type", "program")
				);

				const formattedResults = await results.map(({ uid, data }) => {
					return { uid, ...data };
				});

				setPrograms(formattedResults);
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
		};

		getPrograms();
	}, []);
	return (
		<>
			<section id="programas">
				<article>
					<h2 className="whiteBackgroundTitle">Programas</h2>
					<div>
						{programs.map((program) => (
							<ProgramCard key={program?.uid} {...program} />
						))}
					</div>
				</article>
				<style jsx>{`
					section {
						background: var(--light-grey-background);
						transition: opacity 0.5s;
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
					}

					@media (max-width: 700px) {
						h2 {
							font-size: 2.5rem;
						}
					}
				`}</style>
			</section>
		</>
	);
};

export default Programs;
