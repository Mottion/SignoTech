export interface CustomTextFieldProps {
  value: string, 
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined, 
  label: string
}