import getSchedule from "../../../classes/Schedule.js";

export default function handler(req, res) {
	if (req.method === "GET") {
		const { message } = getSchedule();
		res.status(200).send(message);
	} else {
		res.status(404).send("Not found");
	}
}
