import { Module } from '@nestjs/common';
import { AuthModule } from './providers/auth/auth.module';
import { UserModule } from './models/user/user.module';
import { SurveyModule } from './models/survey/survey.module';
import { JoiPipeModule } from "nestjs-joi";
@Module({
  imports: [
    AuthModule,
    UserModule,
    SurveyModule,
    JoiPipeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
