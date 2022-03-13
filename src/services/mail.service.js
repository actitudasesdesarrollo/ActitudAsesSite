import nodemailer from "nodemailer";

class Mailer {
	constructor(user, pass) {
		this.user = user;
		this.pass = pass;
		/* 		this.transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user,
				pass,
			},
		}); */
		this.transporter = nodemailer.createTransport({
			host: "smtp-mail.outlook.com",
			secureConnection: false,
			port: 587,
			tls: {
				ciphers: "SSLv3",
			},
			auth: {
				user,
				pass,
			},
		});
	}

	sendEmail = async ({
		from = process.env.ADMIN_EMAIL,
		to = process.env.TO_EMAIL,
		subject,
		text = "",
		html = "",
		attachments = [],
	}) => {
		try {
			const mailOptions = {
				from,
				to,
				subject,
				text,
				html,
				attachments,
			};

			const promise = new Promise((res, rej) => {
				this.transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						console.log(error);
						rej(error);
					} else {
						console.log("Email sent: " + info.response);
						res(info.messageId);
					}
				});
			});

			const info = await promise;
			return info;
		} catch (error) {
			console.log(error);
		}
	};
}

export const contactMailer = new Mailer(
	process.env.ADMIN_EMAIL,
	process.env.ADMIN_EMAIL_PASSWORD
);
export const newsMailer = new Mailer(
	process.env.ADMIN_EMAIL,
	process.env.ADMIN_EMAIL_PASSWORD
);
export const suscriptionMailer = new Mailer(
	process.env.ADMIN_EMAIL,
	process.env.ADMIN_EMAIL_PASSWORD
);
