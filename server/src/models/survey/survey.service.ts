import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { GetManySurveyDto } from './dto/get-many-survey.dto';
import { Prisma } from '@prisma/client';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PageListDto } from './dto/page-list.dto';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class SurveyService {
  constructor(
    private readonly surveyRepository: SurveyRepository,
  ){}

  async create(data: CreateSurveyDto, ownerId: number){
    const {fields, ...survey} = data;
    const now = new Date().getTime();
    const start = new Date(data.start).getTime();
    const end = new Date(data.end).getTime();
    

    if(fields.length < 3) throw new InternalServerErrorException("a poll must have at least 3 options");
    if(start >= end ) throw new InternalServerErrorException("Invalide Date");
    if(now >= start ) throw new InternalServerErrorException("Invalide Date");
    const response = await this.surveyRepository.create({...survey, ownerId});

    const fieldsCreateData = fields.map((field) => ({...field, surveyId: response.id}))
    await this.surveyRepository.createFields(fieldsCreateData);
    return response;
  }

  async findById(surveyId: number, userId: number){
    const survey = await this.surveyRepository.findById(surveyId);
    if(!survey) throw new NotFoundException("Survey not found")
    const isOwner = survey.ownerId == userId;

    return {...survey, isOwner};
  }

  async vote(field: CreateVoteDto, userId: number){
    const isValid = await this.surveyRepository.checkVotes(userId, field);
    if(!isValid){throw new InternalServerErrorException("the user has already voted for this poll")}

    const response = await this.surveyRepository.createVote(userId, field);
    return response;
  }

  async update(surveyId: number, data: UpdateSurveyDto){
    if(!surveyId){throw new InternalServerErrorException("Invalid Param")}
    data = new UpdateSurveyDto(data);
    
    if(data.fields){
      const {fields} = data;
      if(fields.length < 3) throw new InternalServerErrorException("a poll must have at least 3 options");
      await this.surveyRepository.removeFields(surveyId);
      const fieldsCreateData = fields.map(({_count, ...field}) => ({...field, surveyId}))
      await this.surveyRepository.createFields(fieldsCreateData);
      delete data.fields
    }

    if(data.start && data.end){
      if(data.start > data.end || data.start == data.end) throw new InternalServerErrorException("Invalide Date");
    }else if (data.start || data.end) {
      const oldSurvey = await this.surveyRepository.findById(surveyId);
      const start = data.start || oldSurvey.start;
      const end = data.end || oldSurvey.end;
      
      if(start > end || start == end) {
        throw new InternalServerErrorException("Invalide Date");
      }
      else {
        data.start = start;
        data.end = end;
      }
    }

    const response = await this.surveyRepository.update(surveyId, data);
    return response;
  }
  
  async findMany(req: GetManySurveyDto){
    const params = new GetManySurveyDto(req).query
    const validOrderArguments: (keyof Prisma.SurveySelect)[] = ["start", "end", "name", "id"];
    if(params.orderBy && !validOrderArguments.includes(params.orderBy as keyof Prisma.SurveySelect)){
      throw new BadRequestException("impossible to sort by parameter:" + params.orderBy);
    }

    const [surveys, count] = await this.surveyRepository.findMany(params);
    const response = new PageListDto<typeof surveys>(surveys, count as number, params);
    return response;
  }

  async delete(id: number){
    return await this.surveyRepository.delete(id);
  }
}
