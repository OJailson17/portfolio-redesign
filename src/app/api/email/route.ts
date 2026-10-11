import { NextRequest, NextResponse } from 'next/server';
import { emailSchemaHTML } from '../../../utils/emailSchema';
import DOMPurify from 'isomorphic-dompurify';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

type BodyProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const {
	UPSTASH_REDIS_REST_URL,
	UPSTASH_REDIS_REST_TOKEN,
	RESEND_USER_EMAIL,
	RESEND_USER_EMAIL_DEST,
} = process.env;

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN,
});

const ONE_HOUR_IN_SECONDS = 60 * 60;

const RATE_LIMIT = 15;
const TIME_WINDOW = ONE_HOUR_IN_SECONDS;

const resend = new Resend(process.env.RESEND_API_KEY);

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
		// Send the email passing the options
		const { error, data } = await resend.emails.send({
			from: `Portfolio ${RESEND_USER_EMAIL}`,
			to: `${RESEND_USER_EMAIL_DEST}`,
			subject,
			html: emailSchemaHTML(
				DOMPurify.sanitize(name),
				DOMPurify.sanitize(email),
				DOMPurify.sanitize(message),
			),
		});

		if (error) {
			return NextResponse.json({ error }, { status: 400 });
		}

		return NextResponse.json({
			message: 'Mensagem enviada com sucesso',
			status: 200,
			data,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 400 });
	}
}
