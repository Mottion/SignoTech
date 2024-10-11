import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../../providers/auth/public.decorator';
import { createUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,

  ) {}

  @Post()
  @Public()
  async create(@Body() user: createUserDto){
    return await this.userService.create(user);
  }

}
