import emoji from "node-emoji";
import { resolve } from "path";

import xlsxService from "../src/services/xlsx.service.js";
import suscriptionsService from "../src/services/suscriptions.service.js";
import { suscriptionMailer } from "../src/services/mail.service.js";

import DBConnect from "../classes/DBConnect.js";

new DBConnect();

let scheduleInstance;
class Schedule {
	constructor() {
		this.initSchedule();
	}

	initSchedule() {
		console.log("schedule initializated");
		this.task();
	}

	async task() {
		try {
			const suscriptionsGetted = await suscriptionsService.getAll();

			console.log(suscriptionsGetted);
			const suscriptionsFormatted = await suscriptionsGetted.map(
				({ name, email, createdAt }) => {
					return { Nombre: name, Email: email, Creación: createdAt };
				}
			);
			console.log(suscriptionsFormatted);

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

			console.log(info);

			if (info) {
				console.log(
					emoji.get("heavy_check_mark"),
					` E-mail sended with success: ${info}`
				);
			} else {
				throw new Error("There was an error, the e-mail couldn't be sended.");
			}
		} catch (error) {
			console.log(error.message);
		}
	}
}

function getInstance() {
	return new Promise((resolve) => {
		if (!scheduleInstance) {
			scheduleInstance = new Schedule();
			resolve({ message: "First time", instance: scheduleInstance });
		} else {
			scheduleInstance.task();
			resolve({ message: "Not first time", instance: scheduleInstance });
		}
	});
}

export default getInstance;
