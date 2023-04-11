import {LetterboxdSchema} from '../hooks/useLetterboxd';

export async function getLetterboxd(): Promise<LetterboxdSchema> {
	const letterboxd = await fetch('http://localhost:3000/api/letterboxd')
    const jsonData: LetterboxdSchema = await letterboxd.json();

	if (!letterboxd.type) {
		throw new Error('Lanyard API failed');
	}

	return jsonData;
}