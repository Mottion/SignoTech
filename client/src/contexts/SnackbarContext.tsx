import React, { useState } from "react"
import { createContext, useContext } from "react"
import { SnackbarContextProps } from "../@types/contexts/SnackbarContextProps"
import { ContextProps } from "../@types/contexts/contextProps"

const SnackbarContext = createContext<SnackbarContextProps>({} as SnackbarContextProps)

export const SnackbarProvider: React.FC<ContextProps> = ({children}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<SnackbarContextProps["severity"]>("error");

  const handleClose = () => {
    setVisible(false);
  }

  const handleOpen = (msg: string, sev: SnackbarContextProps["severity"]) => {
    setVisible(true);
    setMessage(msg);
    setSeverity(sev);
  }

  return (
    <SnackbarContext.Provider value={{
      visible,
      message,
      handleClose,
      handleOpen,
      severity
    }}>
      {children}
    </SnackbarContext.Provider >
  );
}

export function useSnackbar(){
  const context = useContext(SnackbarContext);
  return context;
}