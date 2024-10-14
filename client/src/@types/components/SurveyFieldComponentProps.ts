import { Field } from "../models/SurveyProps";

export interface SurveyFieldComponentProps {
  field: Field,
  editMode?: boolean,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined, 
  onDelete?: () => void, 
  disabled?: boolean,
}