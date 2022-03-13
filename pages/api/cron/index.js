import { sendSuscriptions } from "../../../src/controllers/cron.controller.js";

import DBConnect from "../../../classes/DBConnect.js";

new DBConnect();

export default function handler(req, res) {
	if (req.method === "GET") {
		sendSuscriptions(req, res);
	} else {
		res.status(404).send("Not found");
	}
}
