import cron from "node-cron";
import axios from "axios";

let initializated;
export default class Schedule {
	constructor() {
		this.initSchedule();
	}

	async initSchedule() {
		if (!initializated) {
			this.state = "Cron init";
			await cron.schedule("* * * * *", async () => {
				try {
					const { data: suscriptionsGetted } = await axios.get(
						`${process.env.HOST || process.env.NEXT_PUBLIC_VERCEL_URL}${
							process.env.PORT ? `:${process.env.PORT}` : ""
						}/api/suscriptions`
					);
					const suscriptionsFormatted = await suscriptionsGetted.map(
						({ name, email, createdAt }) => {
							return { Nombre: name, Email: email, Creación: createdAt };
						}
					);

					const { data: bufferFile } = await axios.post(
						`${process.env.HOST || process.env.NEXT_PUBLIC_VERCEL_URL}${
							process.env.PORT ? `:${process.env.PORT}` : ""
						}/api/xlsx`,
						suscriptionsFormatted
					);

					await axios.post(
						`${process.env.HOST || process.env.NEXT_PUBLIC_VERCEL_URL}${
							process.env.PORT ? `:${process.env.PORT}` : ""
						}/api/mail/suscriptions`,
						{
							file: bufferFile,
						}
					);
				} catch (error) {
					console.log(error.message);
				}
			});
		} else {
			this.state = "Cron already init";
		}

		initializated = true;
	}
}
