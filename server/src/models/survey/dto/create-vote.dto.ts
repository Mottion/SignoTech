import { Prisma } from "@prisma/client";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';

@JoiSchemaOptions({allowUnknown: false})
export class CreateVoteDto {
  @JoiSchema(Joi.number().required())
  id: number;
  
  constructor(args: CreateVoteDto) {
    this.id = args.id;
  }
}