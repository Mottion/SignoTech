import { FormControl, RadioGroup } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { SurveyComponentProps } from "../../@types/components/SurveyComponentProps";
import SurveyFieldComponent from "../SurveyField";
import AddSurveyComponent from "../AddSurveyField";
import { Field } from "../../@types/models/SurveyProps";
import utils from "../../utils";

const SurveyComponent: React.FC<SurveyComponentProps> = ({edit, survey, setSurvey, vote, handleVote}) => {
  const status = utils.getStatus(survey.start, survey.end)

  const addField = () => {
    const newField = { text: "" };
    const updatedFields = [...survey.fields as Field[], newField];
    setSurvey({...survey, fields: updatedFields})
  }

  const changeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: Field, index: number) => {
    field.text = e.target.value;
    const updatedFields = survey.fields as Field[];
    updatedFields[index] = field;
    setSurvey({...survey, fields: updatedFields})
  }

  const deleteField = (index: number) => {
    const updatedFields = survey.fields as Field[];
    delete updatedFields[index];
    setSurvey({...survey, fields: updatedFields})
  }

  return (
    <div className='w-full border border-zinc-800 overflow-scroll text-white' style={{scrollbarWidth: "none"}}>
      <FormControl sx={{width: "100%"}}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={vote}
          onChange={handleVote}
        >
          {survey.fields?.map((field, index) => (
            <SurveyFieldComponent 
              key={index}
              field={field} 
              editMode={edit} 
              onChange={(e) => {changeText(e, field, index)}}
              onDelete={() => {deleteField(index)}}
              disabled={status !== "IN PROGRESS"}
            />
          ))}
          {edit && <AddSurveyComponent onClick={addField} />}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default SurveyComponent;