import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ContextProps } from "../@types/contexts/contextProps";
import { AuthContextProps } from "../@types/contexts/AuthContextProps";
import { AuthProps } from "../@types/models/AuthProps";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthProps | null>(null);
  
  useEffect(() => {
    loadFromStorage();
  }, [])

  async function loadFromStorage() {
    const storageData = localStorage.getItem("auth");
    if (storageData) {
      const parsed = JSON.parse(JSON.stringify(storageData));
      setAuth(JSON.parse(parsed));
    }
  }

  async function login(data: AuthProps){
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  }

  async function logOut(){
    setAuth(null);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{
      auth,
      login,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};