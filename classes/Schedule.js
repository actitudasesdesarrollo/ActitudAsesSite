import axios from "axios";

let scheduleInstance;
class Schedule {
	constructor() {
		this.initSchedule();
		this.task();
	}

	initSchedule() {
		console.log("schedule initializated");
		this.task();
	}

	async task() {
		try {
			console.log(
				`${process.env.HOST || process.env.NEXT_PUBLIC_VERCEL_URL}${
					process.env.PORT ? `:${process.env.PORT}` : ""
				}/api/suscriptions`
			);
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
	}
}

function getInstance() {
	if (!scheduleInstance) {
		scheduleInstance = new Schedule();
		return { message: "First time", instance: scheduleInstance };
	} else {
		scheduleInstance.task();
		return { message: "Not first time", instance: scheduleInstance };
	}
}

export default getInstance;
