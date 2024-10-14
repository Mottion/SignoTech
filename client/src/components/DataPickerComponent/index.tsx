import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const DataPickerComponent: React.FC<{
  onChange: (value: dayjs.Dayjs | null) => void
}> = ({onChange}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker 
          sx={{
            margin: "auto",
            minWidth: 0,
            '& .MuiInputBase-root' : {color: "white"},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: "#3f3f46"},
            '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: "#1976d2"},
            '&.MuiTextField-root': {minWidth: 0},
            '& .MuiButtonBase-root': {color: "gray"},
            '&:hover .MuiButtonBase-root': {color: "gray"},
          }} 
          onChange={onChange}
          />
      </DemoContainer>
    </LocalizationProvider> 
  )
}

export default DataPickerComponent