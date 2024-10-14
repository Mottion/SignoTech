import React, {useState} from 'react';
import {  Button, ButtonGroup, Toolbar } from '@mui/material';
import SurveyComponent from '../../components/SurveyComponent';
import CustomTextField from '../../components/CustomTextField';
import { Field, SurveyProps } from '../../@types/models/SurveyProps';
import DataPickerComponent from '../../components/DataPickerComponent';
import dayjs from 'dayjs';
import { useServer } from '../../contexts/ServerContext';
import { useNavigate } from 'react-router-dom';

const CreateSurvey: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyProps>({
    name: "", 
    start: dayjs(),
    end: dayjs(),
    fields: [] as SurveyProps["fields"]
  } as SurveyProps);
  const server = useServer()
  const navigate = useNavigate();

  const handleDate = (newData: Partial<SurveyProps>) => {
    setSurvey({...survey, ...newData})
  }

  const createSurvey = async () => {
    const updatedFields = survey.fields?.filter((item) => item !== undefined && item.text !== "") as Field[];
    const response = await server.createSurvey(survey, updatedFields);
    if(response){
      navigate("/")
    }
  }

  const cancel = () => {
    navigate("/")
  }


  const buttons = [
    <Button onClick={createSurvey} sx={{background: "#166534", border: "none", color: "white", '&:hover': {background: "#15803d"}}} key="one">SAVE</Button>,
    <Button onClick={cancel} sx={{background: "#991b1b", border: "none", color: "white", '&:hover': {background: "#b91c1c"}}} key="two">CANCEL</Button>,
  ];

  return (
    <>
      <Toolbar />
      <div className='text-white flex-wrap font-medium text-2xl flex w-full justify-between items-center gap-2'>
        <CustomTextField 
          label='' 
          onChange={(e) => handleDate({name: e.target.value})} 
          value={survey.name.toUpperCase()} 
          extraSX={{marginTop: 0, minWidth: 200}}
        />
        <ButtonGroup size="large" aria-label="Large button group">
          {buttons}
        </ButtonGroup>
      </div>

      <div className='flex flex-wrap gap-2 mt-4 py-3 p-2 w-full text-white font-medium rounded border border-b-0 border-zinc-800 justify-between'>
        <div className="flex items-center gap-2 flex-wrap">
          <p className='text-zinc-500 pt-2 m-auto'>START:</p>
          <DataPickerComponent onChange={(date) => handleDate({start: date})} />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <p className='text-zinc-500 pt-2 m-auto'>END:</p>
          <DataPickerComponent onChange={(date) => handleDate({end: date})} />
        </div>

      </div>
      <SurveyComponent edit survey={survey} setSurvey={setSurvey} />
      
    </>
  );
}
export default CreateSurvey;