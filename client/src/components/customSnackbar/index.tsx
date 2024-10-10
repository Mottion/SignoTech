import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import React from "react"
import { useSnackbar } from "../../contexts/SnackbarContext";

const CustomSnackbar: React.FC = () => {
  const {message, visible, handleClose, severity} = useSnackbar();

  return (
    <Snackbar
      open={visible}
      onClose={handleClose}
      TransitionComponent={Slide}
      key={"notify"}
      autoHideDuration={2000}
    >
      <Alert variant="filled" severity={severity}>{message}</Alert>
    </Snackbar>
  )
}

export default CustomSnackbar;