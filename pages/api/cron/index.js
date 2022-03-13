import Schedule from "../../../classes/Schedule.js";

const schedule = new Schedule();
export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).send(schedule.state);
	} else {
		res.status(404).send("Not found");
	}
}
