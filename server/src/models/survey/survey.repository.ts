import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateSurveyDto } from "./dto/create-survey.dto";
import { Prisma } from "@prisma/client";
import { pickSelect } from "src/utils/pick-select";
import { GetManySurveyDto } from "./dto/get-many-survey.dto";
import { UpdateSurveyDto } from "./dto/update-survey.dto";

@Injectable()
export class SurveyRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async create(
    data: Omit<CreateSurveyDto, "fields">,
    keys: (keyof Prisma.SurveySelect)[] = ["id", "name"]
  ){
    return await this.prisma.survey.create({
      data: data,
      select: pickSelect(keys) as Prisma.SurveySelect
    })
  }

  async findMany(
    params: GetManySurveyDto["query"]
  ){
    const query: Prisma.SurveyFindManyArgs = {
      skip: (params.page - 1) * params.take,
      take: params.take,
    }

    if(params.search){
      query.where = {name: {contains: params.search}}
    }

    if(params.orderBy){
      query.orderBy = { [params.orderBy]: params.orderType };
    }
    
    const response = await this.prisma.survey.findMany(query);
    return response
  }

  async findById(
    id: number,
    keys: (keyof Prisma.SurveySelect)[] = ["id", "name", "end", "name", "ownerId", "start", "fields"]
  ){
    const response = await this.prisma.survey.findUnique({
      where: {id},
      select: pickSelect(keys) as Prisma.SurveySelect
    });
    return response
  }

  async removeFields(
    surveyId: number
  ){
    const response = await this.prisma.field.deleteMany({
      where: {surveyId}
    });
    return response
  }

  async createFields(
    data: Prisma.FieldCreateManyInput[],
  ){
    const response = await this.prisma.field.createMany({
      data: data
    });
    return response
  }


  async update(
    id: number,
    data: Omit<UpdateSurveyDto, "fields">,    
    keys: (keyof Prisma.SurveySelect)[] = ["id", "name", "end", "name", "ownerId", "start", "fields"]
  ){
    const response = await this.prisma.survey.update({
      where: {id},
      data: data,
      select: pickSelect(keys) as Prisma.SurveySelect
    });
    return response
  }
}