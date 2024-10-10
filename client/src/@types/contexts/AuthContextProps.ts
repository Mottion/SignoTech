import { AuthProps } from "../models/AuthProps";

export interface AuthContextProps{
  auth: AuthProps | null,
  login: (user: AuthProps) => void, 
  logOut: () => void,
}