import { ImageResponse } from '@vercel/og';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	runtime: 'experimental-edge',
};

async function GET(req: NextApiRequest, res: NextApiResponse) {
	// try {
	// 	return new ImageResponse(
	// 		(
	// 			<img
	// 				src='https://ik.imagekit.io/jayllson/portfolio-screenshot_sq5Cqo5-d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672809422430'
	// 				alt=''
	// 			/>
	// 		),
	// 		{
	// 			width: 1200,
	// 			height: 563,
	// 		},
	// 	);
	// } catch (error) {
	// 	console.log(`${error}`);
	// 	return new Response(`Failed to generate the image`, {
	// 		status: 500,
	// 	});
	// }
}
