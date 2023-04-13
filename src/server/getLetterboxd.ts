import { LetterboxdSchema } from '../hooks/useLetterboxd';

type Ip = "localhost" | "127.0.0.0" | "website-git-ssr-zeromero-dev.vercel.app"
const prodIP = "website-git-ssr-zeromero-dev.vercel.app"
export async function getLetterboxd(movieInitial: LetterboxdSchema[]): Promise<LetterboxdSchema> {
	try {
		const letterboxd = await fetch(`http://${prodIP}/api/letterboxd`);
		const jsonData: LetterboxdSchema = await letterboxd.json();
		return jsonData;
	} catch(error){
		// disable linting for this line 
		// eslint-disable-next-line no-console
		console.warn('Error fetching Letterboxd data:', error);
		// @ts-ignore
    	return movieInitial;
	}
}
