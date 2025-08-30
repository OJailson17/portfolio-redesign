import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { TransportOptions } from 'nodemailer';
import { emailSchemaHTML, emailSchemaText } from '../../../utils/emailSchema';
import { sanitize } from 'isomorphic-dompurify';
import { Redis } from '@upstash/redis';

type BodyProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const {
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL,
	REFRESH_TOKEN,
	UPSTASH_REDIS_REST_URL,
	UPSTASH_REDIS_REST_TOKEN,
} = process.env;

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN,
});

const ONE_HOUR_IN_SECONDS = 60 * 60;

const RATE_LIMIT = 5;
const TIME_WINDOW = ONE_HOUR_IN_SECONDS;

// OAuth authentication
const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL,
);

export async function POST(req: NextRequest) {
	const { email, message, name, subject } = (await req.json()) as BodyProps;
	const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

	const userKey = `email_limit:${ip}`;

	// Increment request count in Redis
	const requests = await redis.incr(userKey);

	if (requests === 1) {
		// If it's the first request, set an expiration time
		await redis.expire(userKey, TIME_WINDOW);
	}

	if (requests > RATE_LIMIT) {
		return NextResponse.json({
			error: 'Too many requests from your IP. Please try again later.',
		});
	}

	try {
		// Set the credentials
		oAuth2Client.setCredentials({
			refresh_token: REFRESH_TOKEN,
		});
		const accessToken = await oAuth2Client.getAccessToken();

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
			console.log({ error });
			return NextResponse.json({ error }, { status: 400 });
		});

		return NextResponse.json({
			message: 'Mensagem enviada com sucesso',
			status: 200,
			result,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 400 });
	}
}
