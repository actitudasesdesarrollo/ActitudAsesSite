import Link from "next/link";

import ConsultButton from "./ConsultButton";

const ConsultSection = ({ title, modality, duration }) => {
	return (
		<section>
			<article>
				<h2 className="blackBackgroundTitle">Realizá tu consulta</h2>
				<div className="container">
					<h3 className="blackBackgroundTitle">{title}</h3>
					<div>
						<h4 className="blackBackgroundTitle">Modalidad:</h4>
						<p className="whiteBackgroundTextBody">{modality}</p>
					</div>
					<div>
						<h4 className="blackBackgroundTitle">Duración:</h4>
						<p className="whiteBackgroundTextBody">{duration}</p>
					</div>
					<Link
						href={`https://api.whatsapp.com/send?text=Hola! Quisiera más información sobre el programa ${title}&phone=+5493517551395`}
					>
						<a target="_blank">
							<ConsultButton />
						</a>
					</Link>
				</div>
			</article>
			<style jsx>{`
				section {
					background-image: url(/assets/images/background/dark-background.webp);
					background-size: cover;
				}

				article {
					display: flex;
					flex-direction: column;
					padding: 8vh 0 18vh;
					gap: 8vh;
					align-items: center;
				}

				h2 {
					color: var(--black-background-title);
					text-transform: uppercase;
				}

				h3 {
					font-size: 1.8rem;
					color: var(--black-background-text-body);
					font-weight: 400;
					text-transform: uppercase;
				}
				h4 {
					font-size: 1.5rem;
					color: var(--black-background-text-body);
					font-weight: 300;
					width: 100%;
				}

				p {
					font-size: 1.2rem;
					color: var(--black-background-text-body);
					font-weight: 300;
					width: 100%;
				}

				a {
					display: flex;
					justify-content: center;
				}

				.container {
					display: flex;
					flex-direction: column;
					gap: 7vh;
					background: black;
					width: 30rem;
					max-width: 90vw;
					border-radius: 5px;
					padding: 7vh;
					align-items: center;
					text-align: center;
				}
				div {
					display: flex;
					flex-direction: column;
					gap: 1vh;
				}

				@media (max-width: 500px) {
					article {
						padding-bottom: 28vh;
					}

					h2 {
						font-size: 2.5rem;
						text-align: center;
					}
				}
			`}</style>
		</section>
	);
};

export default ConsultSection;
