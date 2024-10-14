import { SurveyProps } from "../models/SurveyProps";

export interface SurveyComponentProps {
  survey: SurveyProps,
  setSurvey: (data: SurveyProps) => void
  edit?: boolean,
  vote?: string
  handleVote?: (event: React.ChangeEvent<HTMLInputElement>) => void
}