import { Prisma } from "@prisma/client";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';

@JoiSchemaOptions({allowUnknown: false})
export class CreateSurveyDto {
  @JoiSchema(Joi.string().required())
  name: string;
  @JoiSchema(Joi.date().iso().required())
  start: string | Date;
  @JoiSchema(Joi.date().iso().required())
  end: string | Date;
  @JoiSchema(Joi.array().items(Joi.object({text: Joi.string()})).required())
  fields: Prisma.FieldCreateInput[];
  
  constructor(args: CreateSurveyDto) {
    this.name = args.name;
    this.start = args.start;
    this.end = args.end;
    this.fields = args.fields;
  }
}