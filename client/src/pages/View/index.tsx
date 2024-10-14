import React, { useEffect, useState } from 'react';
import {  Button, ButtonGroup, Toolbar } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import SurveyComponent from '../../components/SurveyComponent';
import StatusHeaderComponent from '../../components/StatusHeaderComponent';
import { useServer } from '../../contexts/ServerContext';
import { SurveyProps } from '../../@types/models/SurveyProps';
import utils from '../../utils';
import { useSnackbar } from '../../contexts/SnackbarContext';

const ViewVotation: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyProps>();
  const [vote, setVote] = useState<string | null>(null);

  const navigate = useNavigate();
  const server = useServer(); 
  const params: any = useParams();
  const {handleOpen} = useSnackbar();

  useEffect(() => {
    getSurvey()
  }, [])

  const getSurvey = async () => {
    const response = await server.getSurvey(params.id)
    setSurvey(response);
  }

  const handleVote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVote((event.target as HTMLInputElement).value);
  };

  const createVote = async () => {
    if(!vote){
      handleOpen("you must select an option to vote", "error");
      return;
    }
    const response = await server.vote(vote as any);
    if(response){
      handleOpen("sucess!", "success");
      navigate("/");
    }
  };

  const deleteSurvey = async () => {
    const response = await server.deleteSurvey(survey!.id);
    if(response){
      handleOpen("sucess!", "success");
      navigate("/");
    }
  }

  if(!survey) return <></>;
  return (
    <>
      <Toolbar />
      <div className='text-white font-medium text-2xl flex w-full justify-between items-center'>
        <h2>{survey.name.toUpperCase()}</h2>
        <ButtonGroup size="large" aria-label="Large button group">
          {utils.getStatus(survey.start, survey.end) == "IN PROGRESS" && <Button onClick={createVote}>VOTE</Button>}
          {survey.isOwner && <Button onClick={() => {navigate(`/edit/${survey.id}`)}}>EDIT</Button>}
          {survey.isOwner && <Button onClick={deleteSurvey}>DELETE</Button>}
        </ButtonGroup>
      </div>

      <StatusHeaderComponent value={survey} />
      <SurveyComponent 
        survey={survey} 
        setSurvey={() => {}}
        vote={vote as string}
        handleVote={handleVote}
      />
      
    </>
  );
}
export default ViewVotation;