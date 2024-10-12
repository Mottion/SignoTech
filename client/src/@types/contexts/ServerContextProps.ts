import { AuthProps } from "../models/AuthProps";
import { UserProps } from "../models/UserProps";
import { PaginationDtoProps } from "../publics/PaginationDtoProps";

export interface ServerContextProps{
  userLogin: (user: Omit<UserProps, "name">) => Promise<AuthProps>,
  userCreate: (user: UserProps) => Promise<AuthProps>,
  getSurveys: (search?: string, page?: number) => Promise<PaginationDtoProps>,
  
}