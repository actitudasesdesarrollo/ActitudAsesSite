import cronService from "../services/cron.service.js";
export const sendSuscriptions = async (req, res) => {
	try {
		const { message } = await cronService();
		res.status(200).json({ message });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};
