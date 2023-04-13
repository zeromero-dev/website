import { LetterboxdSchema } from '../hooks/useLetterboxd';
import axios from 'axios';

export async function getLetterboxd(): Promise<LetterboxdSchema> {
	const letterboxd = await fetch('http://localhost:3000/api/letterboxd');
	const jsonData: LetterboxdSchema = await letterboxd.json();

	if (!letterboxd) {
		null
	}

	return jsonData;

}
