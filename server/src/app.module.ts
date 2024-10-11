import { Module } from '@nestjs/common';
import { AuthModule } from './providers/auth/auth.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
