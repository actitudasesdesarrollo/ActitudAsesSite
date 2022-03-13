import express, { json, urlencoded } from "express";
import morgan from "morgan";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import compression from "compression";
import cron from "node-cron";
import axios from "axios";
import cors from "cors";

import router from "./src/routers/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("PORT", PORT);

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(compression());

// Routes
app.use("/api", router);

// Public
app.use("/", express.static(resolve(__dirname, "../frontend/out")));
app.use("/*", express.static(resolve(__dirname, "../frontend/out")));

// Schedule

cron.schedule("* * * * *", async () => {
	try {
		const { data: suscriptionsGetted } = await axios.get("/api/suscriptions");
		const suscriptionsFormatted = await suscriptionsGetted.map(
			({ name, email, createdAt }) => {
				return { Nombre: name, Email: email, Creación: createdAt };
			}
		);

		const { data: bufferFile } = await axios.post(
			"/api/xlsx",
			suscriptionsFormatted
		);

		await axios.post("/api/mail/suscriptions", {
			file: bufferFile,
		});
	} catch (error) {
		console.log(error.message);
	}
});

export default app;
