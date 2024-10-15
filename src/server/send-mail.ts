"use server";
import nodemailer from "nodemailer";

export async function sendEmail(email: string, message: string) {
	try {
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		let mailOptions = {
			from: email,
			to: process.env.SENDER_EMAIL,
			subject: `New Enquiry through www.ambernigam.com from: ${email}`,
			text: message,
			cc: process.env.SECONDARY_EMAIL,
		};

		await transporter.sendMail(mailOptions);

		return { success: true, message: "Email sent successfully!" };
	} catch (error) {
		return { success: false, message: "Error sending email", error };
	}
}
