import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateSurveyDto } from "./dto/create-survey.dto";
import { Prisma } from "@prisma/client";
import { pickSelect } from "src/utils/pick-select";
import { GetManySurveyDto } from "./dto/get-many-survey.dto";
import { UpdateSurveyDto } from "./dto/update-survey.dto";
import { CreateVoteDto } from "./dto/create-vote.dto";

@Injectable()
export class SurveyRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async create(
    data: Prisma.SurveyCreateManyInput,
  ){
    return await this.prisma.survey.create({
      data: data,
    })
  }

  async delete(id: number){
    return await this.prisma.survey.delete({where: {id}})
  }

  async checkVotes(
    userId: number,
    field: CreateVoteDto, 
  ){
    const {surveyId} = await this.prisma.field.findUnique({
      where: {id: field.id},
      select: {surveyId: true}
    })

    const votes = await this.prisma.field.findMany({
      where: {surveyId, votes: {some: {id: userId}}}
    })

    if(!votes.length) return true;
    else return false;
  }

  async createVote(
    userId: number,
    field: CreateVoteDto, 
  ){
    const response = await this.prisma.field.update({
      where: {id: field.id},
      data: {votes: {connect: {id: userId}}}
    });
    return response
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
    
    const surveys = await this.prisma.survey.findMany(query);
    const count = await this.prisma.survey.count({where: query.where});
    return [surveys, count]
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