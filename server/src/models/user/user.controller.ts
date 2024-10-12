import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../../providers/auth/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,

  ) {}

  @Post()
  @Public()
  async create(@Body() user: CreateUserDto){
    return await this.userService.create(user);
  }

  @Public()
  @Get("/get-many")
  async findMany() {
    return await this.userService.findMany();
  }

}
