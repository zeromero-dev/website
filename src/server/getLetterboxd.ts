import { LetterboxdSchema } from '../hooks/useLetterboxd';

export async function getLetterboxd(movieInitial: LetterboxdSchema[]): Promise<LetterboxdSchema> {
	try {
		const letterboxd = await fetch('http://0.0.0.0:3000/api/letterboxd');
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
