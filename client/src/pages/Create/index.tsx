import React, {useState} from 'react';
import {  Button, ButtonGroup, Toolbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import SurveyComponent from '../../components/SurveyComponent';
import CustomTextField from '../../components/CustomTextField';
import { SurveyProps } from '../../@types/models/SurveyProps';
import DataPickerComponent from '../../components/DataPickerComponent';

const buttons = [
  <Button sx={{background: "#166534", border: "none", color: "white", '&:hover': {background: "#15803d"}}} key="one">SAVE</Button>,
  <Button sx={{background: "#991b1b", border: "none", color: "white", '&:hover': {background: "#b91c1c"}}} key="two">CANCEL</Button>,
];

const value = {id: 1, status: "closed", name: "Votação teste 1", start: "2024-06-11 11:45", end:"2024-06-11 18:00"}

const CreateSurvey: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState<SurveyProps>(value);

  const handleDate = (newData: Partial<SurveyProps>) => {
    setData({...data, ...newData})
  }

  return (
    <>
      <Toolbar />
      <div className='text-white flex-wrap font-medium text-2xl flex w-full justify-between items-center gap-2'>
        <CustomTextField 
          label='' 
          onChange={(e) => handleDate({name: e.target.value})} 
          value={data.name.toUpperCase()} 
          extraSX={{marginTop: 0, minWidth: 200}}
        />
        <ButtonGroup size="large" aria-label="Large button group">
          {buttons}
        </ButtonGroup>
      </div>

      <div className='flex flex-wrap gap-2 mt-4 py-3 p-2 w-full text-white font-medium rounded border border-b-0 border-zinc-800 justify-between'>
        <div className="flex items-center gap-2 flex-wrap">
          <p className='text-zinc-500 pt-2 m-auto'>START:</p>
          <DataPickerComponent />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <p className='text-zinc-500 pt-2 m-auto'>END:</p>
          <DataPickerComponent />
        </div>

      </div>
      <SurveyComponent />
      
    </>
  );
}
export default CreateSurvey;