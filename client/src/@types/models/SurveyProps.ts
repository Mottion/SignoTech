export interface SurveyProps {
  id: number;
  name: string;
  start: string;
  end: string;
  ownerId: number,
  fields?: {
    id?: number,
    text: string,
    votes?: number
  }
}