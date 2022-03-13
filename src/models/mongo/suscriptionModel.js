import mongoose from "mongoose";

const suscriptionsCollection = "suscriptions";

const SuscriptionSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, max: 100 },
		email: { type: String, require: true, max: 100, unique: true },
	},
	{
		timestamps: true,
	}
);

const SuscriptionModel = mongoose.model(
	suscriptionsCollection,
	SuscriptionSchema
);
export default SuscriptionModel;
