import { ImageResponse } from '@vercel/og';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	runtime: 'experimental-edge',
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// return new ImageResponse(
		// 	(
		// 		<img
		// 			src='https://ik.imagekit.io/jayllson/profile-image-small_ZEjp85ooY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672808068231'
		// 			alt=''
		// 		/>
		// 	),
		// 	{
		// 		width: 600,
		// 		height: 600,
		// 	},
		// );

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: `green`,
						backgroundSize: '150px 150px',
						height: '100%',
						width: '100%',
						display: 'flex',
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						flexWrap: 'nowrap',
					}}
				>
					<div
						style={{
							fontSize: 60,
							fontStyle: 'normal',
							letterSpacing: '-0.025em',
							color: `red`,
							marginTop: 30,
							padding: '0 120px',
							lineHeight: 1.4,
							whiteSpace: 'pre-wrap',
						}}
					>
						test og image
					</div>
				</div>
			),
			{
				width: 1200,
				height: 640,
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
