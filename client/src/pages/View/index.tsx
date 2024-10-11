import * as React from 'react';
import {  Button, ButtonGroup, Toolbar } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import SurveyComponent from '../../components/SurveyComponent';
import StatusHeaderComponent from '../../components/StatusHeaderComponent';


const value = {id: 1, status: "closed", name: "Votação teste 1", start: "2024-06-11 11:45", end:"2024-06-11 18:00"}

const ViewVotation: React.FC = () => {
  const navigate = useNavigate();

  const buttons = [
    <Button onClick={() => navigate(`/edit/${value.id}`)} key="one">EDIT</Button>,
    <Button key="two">VOTE</Button>,
    <Button key="three">DELETE</Button>,
  ];

  const params = useParams();

  return (
    <>
      <Toolbar />
      <div className='text-white font-medium text-2xl flex w-full justify-between items-center'>
        <h2>{value.name.toUpperCase()}</h2>
        <ButtonGroup size="large" aria-label="Large button group">
          {buttons}
        </ButtonGroup>
      </div>

      <StatusHeaderComponent value={value} />
      <SurveyComponent />
      
    </>
  );
}
export default ViewVotation;