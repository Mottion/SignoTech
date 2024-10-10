import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { ServerContextProps } from "../@types/contexts/ServerContextProps";
import { ContextProps } from "../@types/contexts/contextProps";
import api from "../services/axiosConfig";
import { UserProps } from "../@types/models/UserProps";
import { AuthProps } from "../@types/models/AuthProps";

const ServerContext = createContext<ServerContextProps>({} as ServerContextProps)

export const ServerProvider: React.FC<ContextProps> = ({children}) => {
  const {auth, logOut} = useAuth();

  const requestWrapper: <T>(cb: any) => Promise<T> = async (cb) => {
    try{
      return await cb()
    }catch(error: any){
      if(error.response.data.statusCode == 401){logOut()}
    }
  }

  const userLogin = (user: Omit<UserProps, "name">) => requestWrapper<AuthProps>(async () => {
    // const {data} = await api.post("/auth/login", user)
    // return data;
    return {access_token: "string", name: "string"};
  })

  const userCreate = (user: UserProps) => requestWrapper<AuthProps>(async () => {
    // const {data} = await api.post("/auth/login", user)
    // return data;
    return {access_token: "string", name: "string"};
  })

  return (
    <ServerContext.Provider value={{
      userLogin,
      userCreate
    }}>
      {children}
    </ServerContext.Provider >
  );
}

export function useServer(){
  const context = useContext(ServerContext);
  return context;
}