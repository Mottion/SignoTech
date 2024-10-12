import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AccessTokenDto } from '../../providers/auth/dto/access-token.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ){}

  async create(user: CreateUserDto){
    const response = await this.userRepository.create(user);
    const payload = { id: response.id, name: response.name };
    const access_token = await this.jwtService.signAsync(payload);
    return new AccessTokenDto({access_token, name: response.name});
  }

  async findByEmail(email: string){
    return await this.userRepository.findByEmail(email);
  }

  public async findMany() {
    const response = await this.userRepository.findMany();
    return response;
  }

}
