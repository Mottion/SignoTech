export interface SnackbarContextProps {
  visible: boolean,
  message: string,
  severity: "error" | "success",
  handleClose: () => void,
  handleOpen: (msg: string, sev: SnackbarContextProps["severity"]) => void,
}
