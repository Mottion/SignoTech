import { TextField } from "@mui/material";
import React from "react"
import { CustomTextFieldProps } from "../../@types/components/customTextFieldProps";

const CustomTextField: React.FC<CustomTextFieldProps> = ({value, onChange, label}) => {
  return (
    <TextField 
      sx={{
        marginTop: 3,
        '& .MuiOutlinedInput-notchedOutline': value != "" ? { borderWidth: 2, borderColor: "#1976d2"} : { borderWidth: 2, borderColor: "#52525b"},
        '& .MuiFormLabel-root': value != "" ? {color: "#1976d2"} : {color: "#52525b"},
        '& .MuiInputBase-root': {color: "#FFFFFF"},

        '&:hover .MuiFormLabel-root': {color: "#1976d2"},
        '.MuiFormLabel-root.Mui-focused': {color: "#1976d2"},
        '&:hover .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {borderColor: "#1976d2"},
      }}
      fullWidth
      label={label} 
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomTextField;