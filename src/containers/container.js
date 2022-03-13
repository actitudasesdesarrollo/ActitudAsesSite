class Container {
	constructor(model) {
		this.model = model;
	}
	async getAll() {
		try {
			const data = await this.model.find({});
			const items = data.map((item) => {
				const id = item._id;
				delete item._doc._id;
				return {
					id,
					...item._doc,
				};
			});
			console.log(`The items were getted with success`);
			return items;
		} catch (error) {
			console.error(error.message);
		}
	}
	async getByPropertyValue(property, value) {
		try {
			if (property === "id") {
				property = "_id";
			}
			const filter = {};
			filter[property] = value;
			const item = await this.model.findOne(filter);
			console.log(`The item with ${property} ${value} was getted with success`);
			return item;
		} catch (error) {
			console.error(error.message);
		}
	}

	async getById(inputId) {
		try {
			const response = await this.getByPropertyValue("id", inputId);
			return response;
		} catch (error) {
			console.error(error.message);
		}
	}

	async getByEmail(inputEmail) {
		try {
			const response = await this.getByPropertyValue("email", inputEmail);
			return response;
		} catch (error) {
			console.error(error.message);
		}
	}

	async create(newItem) {
		try {
			const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
			const itemSaveModel = await new this.model(regularObjectNewItem);
			const { _id: id } = await itemSaveModel.save();
			console.log(`Item created with id ${id}`);
			return id;
		} catch (error) {
			console.error(error.message);
		}
	}

	async update(newItem, toUpdateId) {
		try {
			const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
			const item = await this.model.updateOne(
				{ _id: toUpdateId },
				regularObjectNewItem
			);
			console.log(`The item with id ${toUpdateId} was updated with success`);
			return item;
		} catch (error) {
			console.error(error.message);
		}
	}
	async updateByEmail(newItem, toUpdateEmail) {
		try {
			const regularObjectNewItem = JSON.parse(JSON.stringify(newItem));
			const item = await this.model.updateOne(
				{ email: toUpdateEmail },
				regularObjectNewItem
			);
			console.log(
				`The item with email ${toUpdateEmail} was updated with success`
			);
			return item;
		} catch (error) {
			console.error(error.message);
		}
	}
	async deleteByPropertyValue(property, value) {
		try {
			if (property === "id") {
				property = "_id";
			}

			const filter = {};
			filter[property] = value;
			const { _id: id } = await this.model.deleteOne(filter);

			console.log(
				`The item with ${property} ${value} was deleted with success`
			);
			return id;
		} catch (error) {
			console.error(error.message);
		}
	}
	async deleteById(inputId) {
		try {
			const response = await this.deleteByPropertyValue("id", inputId);
			return response;
		} catch (error) {
			console.error(error.message);
		}
	}

	async deleteByName(inputName) {
		try {
			const response = await this.deleteByPropertyValue("name", inputName);
			return response;
		} catch (error) {
			console.error(error.message);
		}
	}

	async deleteAll() {
		try {
			await this.model.deleteMany({});
			console.log(`All the items were deleted with success`);
			return true;
		} catch (error) {
			console.error(error.message);
		}
	}

	async isPropertyValue(property, value) {
		try {
			const filter = {};
			filter[property] = value;
			const item = await this.model.find(filter);
			return item;
		} catch (error) {
			console.error(error.message);
		}
	}
}

export default Container;
