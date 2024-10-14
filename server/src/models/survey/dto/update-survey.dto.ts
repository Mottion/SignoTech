import { Prisma } from "@prisma/client";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';

@JoiSchemaOptions({allowUnknown: false})
export class UpdateSurveyDto {
  @JoiSchema(Joi.number())
  id: number;
  @JoiSchema(Joi.number())
  ownerId: number;
  @JoiSchema(Joi.boolean())
  isOwner: boolean;
  @JoiSchema(Joi.string())
  name: string;
  @JoiSchema(Joi.date().iso())
  start: string | Date;
  @JoiSchema(Joi.date().iso())
  end: string | Date;
  @JoiSchema(Joi.array().items(Joi.object({
    text: Joi.string().required(),
    id: Joi.number().optional(),  
    surveyId: Joi.number().optional(),
  })))
  fields?: {
    text: string
    id?: number
    surveyId?: number
  }[];
  
  constructor(args: UpdateSurveyDto) {
    this.name = args.name;
    this.start = args.start;
    this.end = args.end;
    this.fields = args.fields
  }
}