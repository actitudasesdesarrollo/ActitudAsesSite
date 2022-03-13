import Carousel from "./Carousel";

import { useCarouselContext } from "../../contexts/CarouselContext";

const Testimonials = () => {
	const { slides } = useCarouselContext();
	return (
		<section>
			<article>
				<h2 className="blackBackgroundTitle">Testimonios</h2>
				<Carousel />
			</article>
			<style jsx>{`
				section {
					background-image: url("/assets/images/background/dark-background.webp");
					background-size: cover;
					transition: opacity 0.5s;
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					padding: 8vh 0;
					gap: 8vh;
				}

				h2 {
					text-transform: uppercase;
					color: white;
					width: 50%;
					text-align: center;
				}

				@media (max-width: 500px) {
					h2 {
						width: 80%;
						font-size: 2.5rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Testimonials;
