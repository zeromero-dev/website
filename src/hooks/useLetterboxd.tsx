import {useEffect, useMemo, useState} from 'react';
import z from 'zod';

export const letterboxdSchema = z.object({
	type: z.string(),
	date: z.object({published: z.number(), watched: z.number()}),
	film: z.object({
		title: z.string(),
		year: z.string(),
		image: z.object({
			tiny: z.string(),
			small: z.string(),
			medium: z.string(),
			large: z.string(),
		}),
	}),
	rating: z.object({text: z.string(), score: z.number()}),
	review: z.string(),
	spoilers: z.boolean(),
	isRewatch: z.boolean(),
	uri: z.string(),
});

export type LetterboxdSchema = z.infer<typeof letterboxdSchema>;

export const useLetterboxd = () => {
	const [items, setItems] = useState<LetterboxdSchema[]>([]);
	const memoizedItems = useMemo(() => items, [items]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('api/letterboxd');
			const jsonData = await response.json();
			setItems(jsonData);
		}
		fetchData();
	}, []); //can't set to items because it will cause an infinite loop

	return {items: memoizedItems};
};
