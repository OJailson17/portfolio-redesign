import { ImageResponse } from '@vercel/og';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	runtime: 'experimental-edge',
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		return new ImageResponse(
			(
				<img
					src='https://ik.imagekit.io/jayllson/profile-image-small_ZEjp85ooY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672808068231'
					alt=''
				/>
			),
			{
				width: 600,
				height: 600,
			},
		);
	} catch (error) {
		console.log(`${error}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}

export default handler;
