import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { SurveyRepository } from './survey.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService, SurveyRepository, PrismaService],
})
export class SurveyModule {}
