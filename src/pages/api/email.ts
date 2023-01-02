import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import nodemailer, { TransportOptions } from 'nodemailer';
import { emailSchemaHTML, emailSchemaText } from '../../utils/emailSchema';

import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with POST and OPTIONS
		methods: ['POST', 'OPTIONS'],
		origin: [
			'https://jailsondeoliveira.vercel.app',
			/\.jailsondeoliveira\.vercel\.app$/,
		],
	}),
);

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN } = process.env;

// OAuth authentication
const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL,
);

// Function to send the email
const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
	// Run cors
	await cors(req, res);

	try {
		// Set the credentials
		oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
		const accessToken = oAuth2Client.getAccessToken();

		// Create the transport
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAUTH2',
				user: 'jaylsono11@gmail.com',
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
			},
		} as TransportOptions);

		// Body data
		const { name, email, subject, message } = req.body;

		const mailOptions = {
			from: `${name} <${email}>`,
			to: 'jaylsono17@gmail.com',
			subject: subject,
			text: emailSchemaText(name, email, message),
			html: emailSchemaHTML(name, email, message),
		};

		// Send the email passing the options
		const result = await transport.sendMail(mailOptions).catch(error => {
			res.json(error);
		});

		res.json({ response: 'Mensagem enviada com sucesso', status: 200, result });
	} catch (error) {
		res.json({ error });
		console.log(error);
	}
};

export default sendEmail;
