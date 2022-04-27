import { useCallback, useState } from "react";
import axios from "axios";

const ContactForm = () => {
	const [isError, setIsError] = useState(false);
	const [isOk, setIsOk] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const formSubmitHandler = useCallback(async (event) => {
		try {
			setIsError(false);
			setIsOk(false);
			setIsLoading(true);

			event.preventDefault();

			const formData = new FormData(event.target);

			const usefulFormData = {
				name: formData.get("name"),
				phone: formData.get("phone"),
				email: formData.get("email"),
				message: formData.get("message"),
			};

			const htmlTemplate = `
			<p><b>Nombre:</b> ${usefulFormData.name}</p>
			<p><b>Teléfono:</b> ${usefulFormData.phone}</p>
			<p><b>E-mail:</b> ${usefulFormData.email}</p>
			<p><b>Mensaje:</b> ${usefulFormData.message}</p>`;

			const response = await axios.post("/api/mail/contact", {
				subject: `Mensaje de ${usefulFormData.name} - Web Ases`,
				html: htmlTemplate,
			});

			if (response.status === 200) {
				event.target.reset();
				setIsOk(true);
				setIsLoading(false);
				setTimeout(() => {
					setIsError(false);
					setIsOk(false);
				}, 3000);
			}
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
			setTimeout(() => {
				setIsError(false);
				setIsOk(false);
			}, 3000);
			console.log(error);
		}
	}, []);

	return (
		<form onSubmit={formSubmitHandler}>
			<fieldset className="whiteBackgroundTextBody">
				<input
					type="text"
					name="name"
					required
					placeholder="Nombre:"
					className="whiteBackgroundTextBody"
				/>
				<input
					type="text"
					name="phone"
					placeholder="Teléfono:"
					className="whiteBackgroundTextBody"
				/>
				<input
					type="email"
					name="email"
					required
					placeholder="Correo electrónico:"
					className="whiteBackgroundTextBody"
				/>
				<textarea
					placeholder="Mensaje:"
					required
					name="message"
					className="whiteBackgroundTextBody"
				/>
			</fieldset>
			<div>
				<button type="submit" className="buttonFont">
					Enviar
				</button>
			</div>
			<p className="message">
				{isLoading
					? "Aguarde un momento por favor"
					: isError
						? "El correo no pudo enviarse."
						: isOk
							? "El correo fue enviado con éxito!"
							: ""}
			</p>
			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: min(100%, 50rem);
					position: relative;
				}

				fieldset {
					border: none;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: 100%;
				}

				input {
					padding: 1rem;
					background: var(--black-background-text-body);
					border: none;
					font-size: 1rem;
					color: black;
					max-width: 100%;
				}

				input:focus {
					outline: none;
				}

				textarea {
					padding: 1rem;
					background: var(--black-background-text-body);
					border: none;
					font-size: 1rem;
					resize: none;
					height: 15vh;
					color: black;
				}

				textarea:focus {
					outline: none;
				}

				div {
					display: flex;
					justify-content: flex-end;
					height: min(5rem, 6.7vh);
					align-items: center;
					width: 100%;
				}

				button {
					border-radius: 2px;
					width: 30%;
					height: 80%;
					line-height: 2.5em;
				}
				.message {
					color: white;
					text-align: center;
					font-family: "Roboto";
					position: absolute;
					bottom: -3rem;
					width: 100%;
					font-size: 1.5rem;
				}

				@media (max-width: 450px) {
					form {
						overflow-x: hidden;
						gap: 3rem;
					}

					input {
						grid-column: span 2;
					}

					input {
						padding: 1rem;
						font-size: 1.5rem;
					}

					textarea {
						padding: 1.5rem;
						font-size: 1.5rem;
					}

					button {
						width: 100%;
						font-size: 1.2rem;
					}
				}
			`}</style>
		</form>
	);
};

export default ContactForm;
