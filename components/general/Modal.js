import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Prismic from "@prismicio/client";

import { useModalContext } from "../../contexts/ModalContext";

import Client from "../../utils/prismicHelpers";

const Modal = () => {
	const { toggleIsModalVisible } = useModalContext();

	const [isError, setIsError] = useState(false);
	const [isOk, setIsOk] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const {
				data: { body },
			} = await Client().getSingle("modal");

			setItems(body);
		};

		getItems();
	}, []);
	const formSubmitHandle = useCallback(async (event) => {
		try {
			setIsError(false);
			setIsOk(false);
			setIsLoading(true);

			event.preventDefault();

			const formData = new FormData(event.target);

			const usefulFormData = {
				name: formData.get("name"),
				email: formData.get("email"),
			};

			const htmlTemplate = `
			<p>${usefulFormData.name}, bienvenido a <b>Ases</b>!</p>`;

			const responseMail = await axios.post("/api/mail/news", {
				subject: `Actitud Ases te da la bienvenida`,
				html: htmlTemplate,
				to: usefulFormData.email,
				attachments: [
					{
						filename: "Las-12-Reglas-de-un-As.pdf",
						path: `${window.location.origin}/assets/others/Las-12-Reglas-de-un-As.pdf`,
						contentType: "application/pdf",
					},
				],
			});

			const responseSuscription = await axios.post("/api/suscriptions", {
				name: usefulFormData.name,
				email: usefulFormData.email,
			});

			if (responseMail.status === 200 && responseSuscription.status === 200) {
				event.target.reset();
				setIsOk(true);
				setIsLoading(false);
				setTimeout(() => {
					setIsError(false);
					setIsOk(false);
					localStorage.setItem("modalClosed", "true");
					toggleIsModalVisible();
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

	const closeClickHandle = () => {
		sessionStorage.setItem("modalClosed", "true");
		toggleIsModalVisible();
	};

	return (
		<div className="container">
			<div className="background"></div>
			<div className="modal">
				<img
					alt="cerrar"
					src="/assets/icons/cross.svg"
					className="closeIcon"
					onClick={closeClickHandle}
				/>
				<p className="title workshopCardLegend">
					Suscribite a nuestro newsletter y recibí:
				</p>
				<ul>
					{items?.map(({ primary: { label } }) => {
						return (
							<li key={label} className="whiteBackgroundTextBody">
								<img
									alt="item"
									src="/assets/icons/green-tick.svg"
									className="checkIcon"
								/>{" "}
								{label}
							</li>
						);
					})}
				</ul>
				<p className="title workshopCardLegend">
					Ingresá tu mail para recibir el <span>e-book</span> ahora mismo
				</p>
				<form onSubmit={formSubmitHandle}>
					<input
						type="text"
						name="name"
						required
						placeholder="Nombre:"
						className="whiteBackgroundTextBody"
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="Correo electrónico:"
						className="whiteBackgroundTextBody"
					/>
					<button type="submit">Suscribirse</button>
				</form>
				<p className="message">
					{isLoading
						? "Aguarde un momento por favor"
						: isError
						? "El correo no pudo enviarse."
						: isOk
						? "El correo fue enviado con éxito!"
						: ""}
				</p>
			</div>
			<style jsx>{`
				.container {
					top: 0;
					position: fixed;
					width: 100vw;
					height: 100vh;
					backdrop-filter: blur(2px);
					z-index: 10;
				}

				.background {
					position: absolute;
					width: 100%;
					height: 100%;
					background: black;
					opacity: 0.3;
				}

				span {
					white-space: nowrap;
				}

				.modal {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: min(90vw, 30rem);
					background: white;
					display: flex;
					flex-direction: column;
					gap: 2rem;
					padding: 2rem;
					align-items: center;
				}

				.closeIcon {
					width: 1rem;
					height: 1rem;
					position: absolute;
					right: 1rem;
					top: 1rem;
					cursor: pointer;
				}

				.title {
					font-size: 1.3rem;
					text-align: center;
					width: 100%;
				}

				ul {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: 100%;
				}

				li {
					height: 1.5rem;
					font-size: 1rem;
				}

				.checkIcon {
					object-fit: contain;
					height: 80%;
					width: 7%;
				}

				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: 100%;
				}

				input {
					padding: 0.6rem;
					background: var(--black-background-text-body);
					border: none;
					font-size: 1rem;
					color: black;
					max-width: 100%;
				}

				input:focus {
					outline: none;
				}

				button {
					margin-bottom: 1rem;
				}

				.message {
					text-align: center;
					font-family: "Roboto";
					position: absolute;
					bottom: 1rem;
					width: 100%;
					font-size: 1rem;
				}
			`}</style>
		</div>
	);
};

export default Modal;
