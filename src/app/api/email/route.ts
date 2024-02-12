import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

import nodemailer, { TransportOptions } from 'nodemailer';
import Cors from 'cors';

import { emailSchemaHTML, emailSchemaText } from '../../../utils/emailSchema';
import initMiddleware from '../../../lib/init-middleware';
import { NextRequest, NextResponse } from 'next/server';
import { sanitize } from 'isomorphic-dompurify';

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
export async function POST(req: NextRequest, res: NextResponse) {
	// // Run cors
	// await cors(req, res);

	// try {
	// 	// Set the credentials
	// 	oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
	// 	const accessToken = oAuth2Client.getAccessToken();

	// 	const userEmail = process.env.NODEMAILER_USER_EMAIL;

	// 	// Create the transport
	// 	const transport = nodemailer.createTransport({
	// 		service: 'gmail',
	// 		auth: {
	// 			type: 'OAUTH2',
	// 			user: `${userEmail}`,
	// 			clientId: CLIENT_ID,
	// 			clientSecret: CLIENT_SECRET,
	// 			refreshToken: REFRESH_TOKEN,
	// 			accessToken: accessToken,
	// 		},
	// 	} as TransportOptions);

	// 	// Body data
	// 	const { name, email, subject, message } = req.body;

	// 	const userEmailDest = process.env.NODEMAILER_USER_EMAIL_DEST;

	// 	const mailOptions = {
	// 		from: `${name} <${email}>`,
	// 		to: `${userEmailDest}`,
	// 		subject: subject,
	// 		text: emailSchemaText(sanitize(name), sanitize(email), sanitize(message)),
	// 		html: emailSchemaHTML(sanitize(name), sanitize(email), sanitize(message)),
	// 	};

	// 	// Send the email passing the options
	// 	const result = await transport.sendMail(mailOptions).catch(error => {
	// 		return NextResponse.json(error);
	// 	});

	// 	return NextResponse.json({
	// 		response: 'Mensagem enviada com sucesso',
	// 		status: 200,
	// 		result,
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// 	return NextResponse.json({ error });
	// }

	return NextResponse.json({});
}
