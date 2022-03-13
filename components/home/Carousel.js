import { useState, useEffect } from "react";
import Prismic from "@prismicio/client";

import TestimonyCard from "./TestimonyCard";

import { useCarouselContext } from "../../contexts/CarouselContext";

import Client from "../../utils/prismicHelpers";

const Carousel = () => {
	const { position, setPosition, slides, setSlides } = useCarouselContext();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const getTestimonials = async () => {
			const { results } = await Client().query(
				Prismic.Predicates.at("document.type", "testimonials")
			);
			const formattedResults = await results.map(({ uid, data }) => {
				return { uid, ...data };
			});

			setSlides(formattedResults);
		};

		getTestimonials();

		setIsMobile(window.innerWidth < 600);
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 600);
			setPosition(0);
		});
		return () => {
			setSlides([]);
			setIsMobile(false);
			window.removeEventListener("resize", () => {
				setIsMobile(window.innerWidth < 600);
				setPosition(0);
			});
		};
	}, [setPosition, setSlides]);

	return (
		<div className="carousel">
			<div className="cardsContainer">
				{slides?.map((testimonial) => {
					return <TestimonyCard key={testimonial?.author} {...testimonial} />;
				})}
			</div>
			<div className="buttonsContainer">
				<img
					src="/assets/icons/arrow-left.svg"
					alt="izquierda"
					onClick={() => position > 0 && setPosition(position - 1)}
					className={position === 0 && "inactiveArrow"}
				/>
				<div className="dotsContainer">
					{slides?.map((data, index) =>
						isMobile ? (
							<button
								key={data.author}
								className={
									(isMobile ? index : index - 2) === position && "activeButton"
								}
								onClick={() => setPosition(isMobile ? index : index - 2)}
							></button>
						) : (
							index === 0 ||
							index === 1 || (
								<button
									key={data.author}
									className={
										(isMobile ? index - 1 : index - 2) === position &&
										"activeButton"
									}
									onClick={() => setPosition(isMobile ? index - 1 : index - 2)}
								></button>
							)
						)
					)}
				</div>
				<img
					src="/assets/icons/arrow-right.svg"
					alt="derecha"
					onClick={() =>
						position < (isMobile ? slides.length - 1 : slides.length - 3) &&
						setPosition(position + 1)
					}
					className={
						position === (isMobile ? slides.length - 1 : slides.length - 3) &&
						"inactiveArrow"
					}
				/>
			</div>
			<style jsx>{`
				.carousel {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					overflow-x: hidden;
					width: 100%;
					gap: 4vh;
				}

				.cardsContainer {
					display: grid;
					grid-template-columns: repeat(
						${slides.length},
						${slides?.length ? `calc(${100 / slides.length}% - 3rem)` : "0"}
					);
					grid-template-rows: auto;
					transform: translateX(
						${slides?.length
							? `${-(
									(100 / slides.length) *
									(position - (slides.length - 3) / 2)
							  )}%`
							: "0"}
					);
					transition: transform 0.5s;
					width: ${(100 / 3) * slides.length}%;
					gap: 3rem;
				}

				.buttonsContainer {
					display: flex;
					justify-content: center;
					gap: 5vw;
					align-items: center;
					height: 3.5vh;
				}

				img {
					height: 1.7rem;
					width: 1.7rem;
					object-fit: contain;
					cursor: pointer;
				}

				.dotsContainer {
					display: flex;
					justify-content: center;
					gap: 0.6rem;
				}

				button {
					background: var(--black-background-title);
					width: 0.6rem;
					height: 0.6rem;
					opacity: 0.3;
					cursor: pointer;
					border-radius: 50%;
				}

				.activeButton {
					opacity: 1;
				}

				.inactiveArrow {
					opacity: 0;
					cursor: unset;
				}

				@media (max-width: 700px) {
					.carousel {
						width: 85%;
					}
					.cardsContainer {
						width: ${100 * slides.length}%;
						transform: translateX(
							${slides?.length
								? `${-(
										(100 / slides.length) *
										(position - 1 - (slides.length - 3) / 2)
								  )}%`
								: 0}
						);
					}
				}

				@media (pointer: coarse) {
					button {
						width: 1rem;
						height: 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default Carousel;
