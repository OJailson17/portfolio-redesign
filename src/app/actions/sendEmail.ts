'use server';

import { google } from 'googleapis';
import nodemailer, { TransportOptions } from 'nodemailer';
import { sanitize } from 'isomorphic-dompurify';

import { emailSchemaHTML, emailSchemaText } from '../../utils/emailSchema';

type SendEmailProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN } = process.env;

// OAuth authentication
const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL,
);

export const onSendEmail = async ({
	name,
	email,
	message,
	subject,
}: SendEmailProps) => {
	try {
		// Set the credentials
		oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
		const accessToken = oAuth2Client.getAccessToken();

		const userEmail = process.env.NODEMAILER_USER_EMAIL;

		// Create the transport
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAUTH2',
				user: `${userEmail}`,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
			},
		} as TransportOptions);

		const userEmailDest = process.env.NODEMAILER_USER_EMAIL_DEST;

		const mailOptions = {
			from: `${name} <${email}>`,
			to: `${userEmailDest}`,
			subject: subject,
			text: emailSchemaText(sanitize(name), sanitize(email), sanitize(message)),
			html: emailSchemaHTML(sanitize(name), sanitize(email), sanitize(message)),
		};

		// Send the email passing the options
		const result = await transport.sendMail(mailOptions).catch(error => {
			console.log(error);
			return { error };
		});

		return {
			response: {
				message: 'Mensagem enviada com sucesso',
				status: 200,
				result,
			},
		};
	} catch (error) {
		console.log(error);
		return { error: error };
	}
};
