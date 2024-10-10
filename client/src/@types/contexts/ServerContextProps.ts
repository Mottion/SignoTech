import { AuthProps } from "../models/AuthProps";
import { UserProps } from "../models/UserProps";

export interface ServerContextProps{
  userLogin: (user: Omit<UserProps, "name">) => Promise<AuthProps>,
  userCreate: (user: UserProps) => Promise<AuthProps>,
}