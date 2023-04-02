import { useEffect, useState } from "react"
import z from "zod"

export const letterboxdSchema = z.object({
    type: z.string(),
    date: z.object({ published: z.number(), watched: z.number() }),
    film: z.object({
        title: z.string(),
        year: z.string(),
        image: z.object({
            tiny: z.string(),
            small: z.string(),
            medium: z.string(),
            large: z.string()
        })
    }),
    rating: z.object({ text: z.string(), score: z.number() }),
    review: z.string(),
    spoilers: z.boolean(),
    isRewatch: z.boolean(),
    uri: z.string()
})

export type LetterboxdSchema = z.infer<typeof letterboxdSchema>

export const useLetterboxd = async (username: string) => {
    const [items, setItems] = useState<LetterboxdSchema[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetch("http://localhost:3000/api/letterboxd")
            .then((res) => res.json())
            .then((data) => {
                setItems(data.items)
                console.log(items)

            })
            .catch((err) => setError(err))
    }), [username];

    return (
        { items, error }
    )
}