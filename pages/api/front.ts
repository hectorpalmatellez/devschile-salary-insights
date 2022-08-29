import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Answer } from '../types/Answer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await axios.get(process.env.ANSWERS_URL as string).then((response) => {
      const frontResponse: Array<Answer> = response.data
        .map((answer: Answer) => {
          if (
            answer[
              '¿Cuál es el rol que cumples actualmente en tu trabajo remunerado?'
            ] === 'Desarrollador Front-end'
          ) {
            return answer;
          }
        })
        .filter(Boolean);
      res.status(200).json(frontResponse);
    });
  } catch (error) {
    console.error(error);
  }
}
