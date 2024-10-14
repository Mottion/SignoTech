import { AuthProps } from "../models/AuthProps";
import { Field, SurveyProps } from "../models/SurveyProps";
import { UserProps } from "../models/UserProps";
import { PaginationDtoProps } from "../publics/PaginationDtoProps";

export interface ServerContextProps{
  userLogin: (user: Omit<UserProps, "name">) => Promise<AuthProps>,
  userCreate: (user: UserProps) => Promise<AuthProps>,
  getSurveys: (search?: string, page?: number) => Promise<PaginationDtoProps>,
  getSurvey: (id: number) => Promise<SurveyProps>,
  createSurvey: (survey: SurveyProps, fields: Field[]) => Promise<any>,
  updateSurvey: (survey: SurveyProps, fields: Field[]) => Promise<any>,
  vote: (id: number) => Promise<any>,
  deleteSurvey: (id:number) => Promise<any>,
}