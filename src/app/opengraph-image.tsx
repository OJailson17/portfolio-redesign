import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Jailson de Oliveira | Portfólio';
export const size = {
	width: 1200,
	height: 563,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
	return new ImageResponse(
		(
			<img
				src='https://ik.imagekit.io/jayllson/portfolio-screenshot_sq5Cqo5-d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672809422430'
				alt='Jailson de Oliveira'
				style={{ width: '100%', height: '100%' }}
			/>
		),
		{
			...size,
		},
	);
}
