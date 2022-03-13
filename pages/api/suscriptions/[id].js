import {
	getSuscriptionById,
	updateSuscriptionById,
	deleteSuscriptionById,
} from "../../../src/controllers/suscriptions.controller.js";

import DBConnect from "../../../classes/DBConnect.js";

new DBConnect();
export default function handler(req, res) {
	if (req.method === "GET") {
		getSuscriptionById(req, res);
	} else if (req.method === "PUT") {
		updateSuscriptionById(req, res);
	} else if (req.method === "DELETE") {
		deleteSuscriptionById(req, res);
	} else {
		res.status(404).send("Not found");
	}
}
