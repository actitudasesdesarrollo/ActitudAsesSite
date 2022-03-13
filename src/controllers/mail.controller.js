import emoji from "node-emoji";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import {
	contactMailer,
	newsMailer,
	suscriptionMailer,
} from "../services/mail.service.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendContactFormEmail = async (req, res) => {
	try {
		const { body } = req;

		const info = await contactMailer.sendEmail(body);
		if (info) {
			console.log(
				emoji.get("heavy_check_mark"),
				` E-mail sended with success: ${info}`
			);
			return res.status(200).send(info);
		} else {
			throw new Error("There was an error, the e-mail couldn't be sended.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};

export const sendNewsEmail = async (req, res) => {
	try {
		const { body } = req;

		const info = await newsMailer.sendEmail({
			...body,
			/* from: "news@actitudases.com", */
		});

		if (info) {
			console.log(
				emoji.get("heavy_check_mark"),
				` E-mail sended with success: ${info}`
			);
			return res.status(200).send(info);
		} else {
			throw new Error("There was an error, the e-mail couldn't be sended.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};

export const sendSuscriptions = async (req, res) => {
	try {
		const { body } = req;

		const info = await suscriptionMailer.sendEmail({
			subject: "Suscriptores",
			attachments: [
				body?.file
					? {
							filename: "Suscriptores.xlsx",
							content: body.file,
							encoding: "binary",
							contentType:
								"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
							contentDisposition: "attachment; filename=Suscriptores.xlsx",
					  }
					: {
							filename: "Suscriptores.xlsx",
							path: resolve(__dirname, "../data/Suscriptores.xlsx"),
					  },
			],
			to: process.env.ADMIN_EMAIL,
		});

		if (info) {
			console.log(
				emoji.get("heavy_check_mark"),
				` E-mail sended with success: ${info}`
			);
			return res.status(200).send(info);
		} else {
			throw new Error("There was an error, the e-mail couldn't be sended.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};
