import { Answer, Gender } from '../types/Answer';
import { Questions as q } from '../constants/questions';

export const useGenders = (filteredData: Array<Answer>) => {
  const filterByGender = (gender: Gender) =>
    filteredData!.filter((answer: Answer) => answer[q.gender] === gender);
  const men = filterByGender('Hombre');
  const women = filterByGender('Mujer');
  const other = filterByGender('Otro');

  return {
    men,
    women,
    other,
  };
};
