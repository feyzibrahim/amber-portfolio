"use server";
import { Resend } from "resend";

export default async function sendMail(sender: string, body: string) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	await resend.emails.send({
		to: process.env.AMBER_EMAIL as string,
		from: "no-replay@basys.ai",
		subject: `Message From: ${sender}`,
		html: `<p>${body}</p>`,
	});
}
