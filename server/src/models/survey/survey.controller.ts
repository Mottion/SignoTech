import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Request } from 'express';
import { GetManySurveyDto } from './dto/get-many-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Public } from 'src/providers/auth/public.decorator';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('survey')
export class SurveyController {
  constructor(
    private readonly surveyService: SurveyService
  ) {}

  @Post()
  async create(@Body() body: CreateSurveyDto, @Req() req: Request) {
    return await this.surveyService.create(body, req["user"].id);
  }

  @Post("/vote")
  async vote(@Body() body: CreateVoteDto, @Req() req: Request) {
    return await this.surveyService.vote(body, req["user"].id);
  }

  @Get("/many")
  async findMany(@Req() req: GetManySurveyDto) {
    return await this.surveyService.findMany(req);
  }

  @Get("/:id")
  async findById(@Param() params: {id: number}, @Req() req: Request) {
    return await this.surveyService.findById(+params.id, +req["user"].id);
  }

  @Patch("/:id")
  async update(@Body() body: UpdateSurveyDto, @Param() params: {id: number}) {
    return await this.surveyService.update(+params.id, body);
  }

  @Delete("/:id")
  async delete( @Param() params: {id: number}) {
    return await this.surveyService.delete(+params.id);
  }

}
