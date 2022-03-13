import { getSuscriptionByEmail } from "../../../../src/controllers/suscriptions.controller.js";

import DBConnect from "../../../../classes/DBConnect.js";

new DBConnect();
export default function handler(req, res) {
	if (req.method === "GET") {
		getSuscriptionByEmail(req, res);
	} else {
		res.status(404).send("Not found");
	}
}
