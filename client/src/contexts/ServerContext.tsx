import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { ServerContextProps } from "../@types/contexts/ServerContextProps";
import { ContextProps } from "../@types/contexts/contextProps";
import api from "../services/axiosConfig";
import { UserProps } from "../@types/models/UserProps";
import { AuthProps } from "../@types/models/AuthProps";
import { useSnackbar } from "./SnackbarContext";
import { SurveyProps } from "../@types/models/SurveyProps";
import { PaginationDtoProps } from "../@types/publics/PaginationDtoProps";

const ServerContext = createContext<ServerContextProps>({} as ServerContextProps)

export const ServerProvider: React.FC<ContextProps> = ({children}) => {
  const {auth, logOut} = useAuth();
  const {handleOpen} = useSnackbar();

  const requestWrapper: <T>(cb: any) => Promise<T> = async (cb) => {
    try{
      return await cb()
    }catch(error: any){
      handleOpen(error?.response?.data?.message, "error")
      if(error.response.data.statusCode == 401){logOut()}
    }
  }

  const userLogin = (user: Omit<UserProps, "name">) => requestWrapper<AuthProps>(async () => {
    const {data} = await api.post("/auth/login", user)
    return data;
  })

  const userCreate = (user: UserProps) => requestWrapper<AuthProps>(async () => {
    const {data} = await api.post("/user", user)
    return data;
  })

  const getSurveys = (search?: string, page?: number) => requestWrapper<PaginationDtoProps>(async () => {
    const {data} = await api.get("/survey/many", {
      params: {
        search: search || null, 
        page: page || null
      },
      headers: {Authorization: `Bearer ${auth?.access_token}`}
    })
    return data;
  })

  return (
    <ServerContext.Provider value={{
      userLogin,
      userCreate,
      getSurveys
    }}>
      {children}
    </ServerContext.Provider >
  );
}

export function useServer(){
  const context = useContext(ServerContext);
  return context;
}