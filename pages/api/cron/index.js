import Schedule from "../../../classes/Schedule.js";

export default function handler(req, res) {
	if (req.method === "GET") {
		const schedule = new Schedule();
		res.status(200).send(schedule.state);
	} else {
		res.status(404).send("Not found");
	}
}
