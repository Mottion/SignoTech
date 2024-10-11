import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface CustomTextFieldProps {
  value: string, 
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined, 
  label: string,
  extraSX?: SxProps<Theme>
}