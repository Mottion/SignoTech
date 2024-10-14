import dayjs from 'dayjs';

export interface SurveyProps {
  id: number;
  name: string;
  start: dayjs.Dayjs | null;
  end: dayjs.Dayjs | null;
  ownerId: number,
  isOwner?: boolean,
  fields?: Field[]
}

export interface Field {
  id?: number,
  text: string,
  _count?: {
    votes: number
  }
}