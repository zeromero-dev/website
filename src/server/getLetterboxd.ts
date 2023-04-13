import { LetterboxdSchema } from '../hooks/useLetterboxd';
import { env } from './env';
// type Ip = "localhost" | "website-git-ssr-zeromero-dev.vercel.app"
// const prodIP: Ip = "website-git-ssr-zeromero-dev.vercel.app"

export async function getLetterboxd(movieInitial: LetterboxdSchema[]): Promise<LetterboxdSchema> {
	try {
		const letterboxd = await fetch(`http://${env.PROD_ENV}/api/letterboxd`);
		const jsonData: LetterboxdSchema = await letterboxd.json();
		return jsonData;
	} catch (error) {
		// disable linting for this line
		// eslint-disable-next-line no-console
		console.warn('Error fetching Letterboxd data:', error);
		// @ts-ignore
		return movieInitial;
	}
}
