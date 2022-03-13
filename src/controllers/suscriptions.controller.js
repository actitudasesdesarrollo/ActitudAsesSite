import suscriptionsService from "../services/suscriptions.service.js";
export const getSuscriptions = async (req, res) => {
	try {
		const suscriptions = await suscriptionsService.getAll();
		res.json(suscriptions);
	} catch (error) {
		res.json({ error: error.message });
	}
};
export const getSuscriptionById = async (req, res) => {
	try {
		const suscription = await suscriptionsService.getById(req.query.id);
		res.json(suscription);
	} catch (error) {
		res.json({ error: error.message });
	}
};
export const getSuscriptionByEmail = async (req, res) => {
	try {
		const suscription = await suscriptionsService.getByEmail(req.query.email);
		res.json(suscription);
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const saveSuscription = async (req, res) => {
	try {
		const suscriptionBody = req.body;
		const id = await suscriptionsService.save(suscriptionBody);
		res.json({ id: id, suscription: suscriptionBody });
	} catch (error) {
		res.json({ error: error.message });
	}
};
export const updateSuscriptionById = async (req, res) => {
	try {
		const suscriptionBody = req.body;
		await suscriptionsService.save(suscriptionBody, req.query.id);
		res.json({
			result: "ok",
			id: req.query.id,
			new: req.body,
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const deleteSuscriptionById = async (req, res) => {
	try {
		await suscriptionsService.deleteById(req.query.id);
		res.json({
			result: "ok",
			id: req.query.id,
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const deleteSuscriptionByEmail = async (req, res) => {
	try {
		const suscription = await suscriptionsService.getByEmail(req.query.email);
		await suscriptionsService.deleteByEmail(req.query.id);
		res.json({
			result: "ok",
			id: req.query.id,
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};
