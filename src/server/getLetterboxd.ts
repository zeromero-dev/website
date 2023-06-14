import { LetterboxdSchema } from '../hooks/useLetterboxd';
import { env } from './env';

export async function getLetterboxd(movieInitial: LetterboxdSchema[]): Promise<LetterboxdSchema> {
	try {
		const letterboxd = await fetch(`http://${env.PROD_ENV}/api/letterboxd`,
		{
			headers: {
				'x-api-key': env.API_KEY,
			}
		});
		const jsonData: LetterboxdSchema = await letterboxd.json();
		return jsonData;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.warn('Error fetching Letterboxd data:', error);
		// @ts-ignore
		return movieInitial;
	}
}
