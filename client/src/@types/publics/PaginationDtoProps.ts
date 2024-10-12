import { SurveyProps } from "../models/SurveyProps";

export interface PaginationDtoProps {
  results: SurveyProps[];
  page: number;
  orderType: "asc" | "desc";
  orderBy?: string;
  take: number;
  totalResults: number
}