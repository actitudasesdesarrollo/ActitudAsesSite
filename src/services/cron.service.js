import emoji from "node-emoji";
import { resolve } from "path";

import xlsxService from "./xlsx.service.js";
import suscriptionsService from "./suscriptions.service.js";
import { suscriptionMailer } from "./mail.service.js";

let scheduleInstance;
class Schedule {
	constructor() {}

	async task() {
		try {
			const suscriptionsGetted = await suscriptionsService.getAll();

			console.log(suscriptionsGetted);

			const suscriptionsFormatted = await suscriptionsGetted.map(
				({ name, email, createdAt }) => {
					return { Nombre: name, Email: email, Creación: createdAt };
				}
			);

			const bufferFile = await xlsxService.convertJsonToExcel(
				suscriptionsFormatted,
				"Suscriptores"
			);

			const info = await suscriptionMailer.sendEmail({
				subject: "Suscriptores",
				attachments: [
					bufferFile
						? {
								filename: "Suscriptores.xlsx",
								content: bufferFile,
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
			} else {
				throw new Error("There was an error, the e-mail couldn't be sended.");
			}

			return { message: "Ok" };
		} catch (error) {
			console.log(error.message);
		}
	}
}

const instance = new Schedule();

export default instance;
