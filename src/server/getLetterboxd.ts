import { LetterboxdSchema } from '../hooks/useLetterboxd';
import { env } from './env';

export async function getLetterboxd(): Promise<LetterboxdSchema[] | null> {
	//Fetches data from the Letterboxd API
	//If fails returns an empty array
	try {
		const letterboxd = await fetch(`http://${env.PROD_ENV}/api/letterboxd`, {
			headers: {
				'x-api-key': env.API_KEY,
			},
		});

		const movieData: LetterboxdSchema[] = await letterboxd.json();
		
		return movieData;

	} catch (error) {
		// eslint-disable-next-line no-console
		console.warn('Error fetching Letterboxd data:', error);

		return null;
	}
}
