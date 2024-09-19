"use server";
import { Resend } from "resend";

export default async function sendMail(sender: string, body: string) {
	const resend = new Resend(process.env.MINE);

	await resend.emails.send({
		to: process.env.AMBER_EMAIL as string,
		from: "no-replay@exiphones.shop",
		subject: `Message From: ${sender}`,
		html: `<p>${body}</p>`,
	});
}
