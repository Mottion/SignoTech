import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from './dto/access-token.dto';
import { UserService } from 'src/models/user/user.service';
import { compare } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}
  
  async signIn(email: string, password: string): Promise<AccessTokenDto> {
    const user = await this.usersService.findByEmail(email);
    if(!user) throw new UnauthorizedException("Invalid credentials");
    
    const valid = await compare(password, user.password );
    if (!valid) throw new UnauthorizedException("Invalid credentials");
    
    const payload = { id: user.id, name: user.name };
    const access_token = await this.jwtService.signAsync(payload);
    return new AccessTokenDto({access_token, name: payload.name});
  }
}