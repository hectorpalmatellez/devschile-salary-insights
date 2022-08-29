export type Gender = 'Hombre' | 'Mujer' | 'Otro';
type RangeOfAge = '18 a 24' | '25 a 34' | '35 a 44' | '45 a 54';
type DidBootcamp = 'Si completo' | 'Si incompleto' | 'No';
type EducationLevel =
  | 'Universitario completo'
  | 'Técnico completo'
  | 'Universitario incompleto'
  | 'Técnico incompleto'
  | 'Universitario postgrado'
  | 'Colegio - básica'
  | 'Colegio - educación media';
type AnotherLanguage = 'Si' | 'No';
type RangeOfExperience =
  | '1 año o menos'
  | '2 años a 5 años'
  | '6 años a 10 años'
  | 'más de 11 años';
type Roles =
  | 'Desarrollador Front-end'
  | 'Desarrollador Back-end'
  | 'Desarrollador Full-stack'
  | 'Tech lead / Manager'
  | 'QA'
  | 'Desarrollador Mobile'
  | 'Diseñador Web'
  | 'Diseñador Gráfico'
  | 'Otro'
  | 'SysAdmin'
  | 'DevOps'
  | 'CTO/CEO/CFO/COO';
type SalaryRanges =
  | 'Entre $2.501.000 a $3.000.000'
  | 'Entre $2.001.000 a $2.500.000'
  | 'Más de $3.000.000'
  | 'Entre $1.001.000 a $1.500.000'
  | 'Entre $1.501.000 a $1.800.000'
  | 'Entre $1.801.000 a $2.000.000'
  | 'Entre $501.000 a $1.000.000';

export interface Answer {
  'Submission ID': string;
  'Respondent ID': string;
  'Submitted at': Date;
  '¿Cuál es tu género?': Gender;
  '¿Cuál es tu rango de edad?': RangeOfAge;
  '¿Estudiaste en un bootcamp?': DidBootcamp;
  '¿Cuál es el máximo nivel educacional que llegaste?': EducationLevel;
  '¿Dominas otro idioma hablado/escrito aparte del español?': AnotherLanguage;
  '¿Hace cuántos años estás trabajando en tecnología?': RangeOfExperience;
  '¿Cuáles son las funciones que has realizado en tu vida profesional?': Array<Roles>;
  '¿Cuál es el rol que cumples actualmente en tu trabajo remunerado?': Roles;
  '¿Cuál es tu nivel de ingreso liquido mensual en tu trabajo actual?': SalaryRanges;
}
