import { NextApiRequest, NextApiResponse } from 'next';

// Middleware to add cors to the api
export default function initMiddleware(middleware: any) {
	return (req: NextApiRequest, res: NextApiResponse) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result: any) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			});
		});
}
