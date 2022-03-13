import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import xlsxService from "../services/xlsx.service.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const exportToExcel = async (req, res) => {
	try {
		const { body } = req;
		const bufferFile = await xlsxService.convertJsonToExcel(
			body,
			"Suscriptores"
		);

		res.status(200).send(bufferFile ? bufferFile : "ok");
	} catch (error) {
		console.log(error);
	}
};
export const deleteFile = async (req, res) => {
	try {
		const {
			query: { name },
		} = req;

		const pathTail = resolve(__dirname, "../data/");
		const path = `${pathTail}/${name}`;
		await fs.promises.unlink(path, (error) => {
			if (error) throw error;
		});
		res.status(200).send("ok");
	} catch (error) {
		res.status(404).send("failed");
		console.log(error);
	}
};
