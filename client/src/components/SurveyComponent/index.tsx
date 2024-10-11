import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const SurveyComponent: React.FC = () => {
  return (
    <div className='w-full border border-zinc-800 overflow-scroll text-white' style={{scrollbarWidth: "none"}}>
      <FormControl sx={{width: "100%"}}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <div className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900 px-6 py-2'>
            <FormControlLabel 
              disabled
              sx={{width: "100%", '& .MuiFormControlLabel-label.Mui-disabled': {color: "white"}}} 
              value="female" 
              control={<Radio sx={{color: "#3f3f46", '&.Mui-disabled': {color: "#3f3f46"}}}/>} 
              label="Female" 
            />
          </div>
          <div className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900 px-6 py-2'>
            <FormControlLabel 
              disabled
              sx={{width: "100%", '& .MuiFormControlLabel-label.Mui-disabled': {color: "white"}}} 
              value="male" 
              control={<Radio sx={{color: "#3f3f46", '&.Mui-disabled': {color: "#3f3f46"}}}/>} 
              label="male" 
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default SurveyComponent;