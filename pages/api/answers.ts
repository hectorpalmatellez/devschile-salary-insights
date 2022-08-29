import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Answer } from '../types/Answer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await axios.get(process.env.ANSWERS_URL as string).then((response) => {
      res.status(200).json(response?.data as Array<Answer>);
    });
  } catch (error) {
    console.error(error);
  }
}
