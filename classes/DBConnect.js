import mongoose from "mongoose";
import emoji from "node-emoji";

let connection;
export default class DBConnect {
	constructor() {
		this.connectDataBase();
	}

	async connectDataBase() {
		try {
			this.url = process.env.MONGO_DB_URL;

			if (!connection) {
				connection = await mongoose.connect(this.url, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
				});

				console.log(emoji.get("spiral_note_pad"), " Database connected");
			}
		} catch (error) {
			console.log(error.message);
		}
	}
}
