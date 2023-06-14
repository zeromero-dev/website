import letterboxd from 'letterboxd-api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '../../server/env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { headers } = req;
	const apiKey = headers['x-api-key'];
	if (apiKey !== env.API_KEY) {
		res.status(401).json({ message: 'HAHAHA YOU SILLY GOOSE YOU UNDERESTIMATED MY POWER' });
		return;
	}

	try {
		const items = await letterboxd('zeromero');
		const data = items.slice(0, 3);

		// res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes (300 seconds)

		res.status(200).json(data);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	}
}
