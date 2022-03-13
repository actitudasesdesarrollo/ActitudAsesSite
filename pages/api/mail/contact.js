import { sendContactFormEmail } from "../../../src/controllers/mail.controller.js";

import DBConnect from "../../../classes/DBConnect.js";

new DBConnect();

export default function handler(req, res) {
	if (req.method === "POST") {
		sendContactFormEmail(req, res);
	} else {
		res.status(404).send("Not found");
	}
}
