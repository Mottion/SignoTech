import { Prisma } from "@prisma/client";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';

@JoiSchemaOptions({allowUnknown: false})
export class UpdateSurveyDto {
  @JoiSchema(Joi.string())
  name: string;
  @JoiSchema(Joi.date().iso())
  start: string | Date;
  @JoiSchema(Joi.date().iso())
  end: string | Date;
  @JoiSchema(Joi.array().items(Joi.object({text: Joi.string()})))
  fields?: Prisma.FieldCreateInput[];
  
  constructor(args: UpdateSurveyDto) {
    this.name = args.name;
    this.start = args.start;
    this.end = args.end;
    this.fields = args.fields;
  }
}