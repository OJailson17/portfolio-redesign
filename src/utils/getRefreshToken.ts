import axios from 'axios';

async function refreshAccessToken(refreshToken: string) {
	const res = await axios.post(
		'https://oauth2.googleapis.com/token',
		{
			client_id: process.env.GOOGLE_CLIENT_ID,
			client_secret: process.env.GOOGLE_CLIENT_SECRET,
			refresh_token: refreshToken,
			grant_type: 'refresh_token',
		},
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			transformRequest: [data => new URLSearchParams(data).toString()],
		},
	);

	return res.data; // contains access_token, expires_in, etc.
}
