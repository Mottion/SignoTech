import { FormControlLabel, Radio } from '@mui/material';
import * as React from 'react';
import { SurveyFieldComponentProps } from '../../@types/components/SurveyFieldComponentProps';
import CustomTextField from '../CustomTextField';
import DeleteIcon from '@mui/icons-material/Delete';

const SurveyFieldComponent: React.FC<SurveyFieldComponentProps> = ({field, editMode, onChange, onDelete, disabled}) => {
  if(!field) return <></>;
  return (
    <div className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900 px-6 py-2'>
      {editMode ?
        <div className="flex gap-2 items-center">
          <CustomTextField 
            label='' 
            onChange={onChange} 
            value={field.text} 
            extraSX={{marginTop: 0, minWidth: 200}}
          />
          <DeleteIcon sx={{width: 40, height: 40, '&:hover': {color: "red"}}} onClick={onDelete} />
        </div>
      :
      <FormControlLabel
        disabled={disabled}
        sx={{width: "100%", '& .MuiFormControlLabel-label.Mui-disabled': {color: "white"}}} 
        value={field.id} 
        control={<Radio sx={{color: "#3f3f46", '&.Mui-disabled': {color: "#3f3f46"}}}/>} 
        label={field.text} 
      />
      }

    </div>
  )
}

export default SurveyFieldComponent