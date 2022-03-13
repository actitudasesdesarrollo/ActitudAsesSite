import {
	exportToExcel,
	deleteFile,
} from "../../../src/controllers/xlsx.controller.js";

import DBConnect from "../../../classes/DBConnect.js";

new DBConnect();
export default function handler(req, res) {
	if (req.method === "POST") {
		exportToExcel(req, res);
	} else if (req.method === "DELETE") {
		deleteFile(req, res);
	} else {
		res.status(404).send("Not found");
	}
}
