import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section id="contacto">
			<article>
				<h2 className="blackBackgroundTitle">Contacto</h2>
				<ContactForm />
			</article>
			<style jsx>{`
				section {
					background: var(--dark-grey-background);
				}

				article {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					height: 100%;
					gap: 8vh;
					padding: 8vh 0 18vh;
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

					article {
						padding-bottom: 28vh;
					}
				}
			`}</style>
		</section>
	);
};

export default Contact;
