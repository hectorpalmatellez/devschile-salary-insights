import { Answer, Role } from '../types/Answer';
import { Questions as q } from '../constants/questions';

export const useRoles = (filteredData: Array<Answer>) => {
  const roles: Array<Role> = Array.from(
    new Set(filteredData.map((answer) => answer[q.currentRole]))
  );

  return {
    roles,
  };
};
