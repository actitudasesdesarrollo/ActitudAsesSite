import Container from "../containers/container.js";

import Suscription from "../models/objects/Suscription.js";
import SuscriptionModel from "../models/mongo/suscriptionModel.js";

class SuscriptionsDao extends Container {
	constructor() {
		super(SuscriptionModel);
	}

	async save(newSuscription, toUpdateId = null) {
		try {
			const newSuscriptionInstanced = new Suscription(newSuscription);
			if (toUpdateId && this.isPropertyValue("id", toUpdateId)) {
				const response = await this.update(newSuscriptionInstanced, toUpdateId);
				return response;
			} else {
				const response = await this.create(newSuscriptionInstanced);
				return response;
			}
		} catch (error) {
			console.error(error);
		}
	}
}

const productsDao = new SuscriptionsDao();
export default productsDao;
