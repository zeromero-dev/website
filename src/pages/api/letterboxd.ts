import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore but needs to fix in lib
import letterboxd from "letterboxd";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const items = await letterboxd("zeromero");
    const data = items.slice(0, 3);

    // res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes (300 seconds)

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
