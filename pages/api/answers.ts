import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(process.env.ANSWERS_URL as string);
    res.status(200).json(await response.json());
  } catch (error) {
    console.error(error);
  }
}
