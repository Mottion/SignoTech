import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma.service";
import { pickSelect } from "src/utils/pick-select";

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async findByEmail(
    email: string,
    keys: (keyof Prisma.UserSelect)[] = ["id", "password", "name"]
  ){
    const response = await this.prisma.user.findUnique({
      where: {email}, 
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async create(
    user: CreateUserDto,
    keys: (keyof Prisma.UserSelect)[] = ["id", "name"]
  ){
    const response = await this.prisma.user.create({
      data: user,
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async getById(
    id: number,
    keys: (keyof Prisma.UserSelect)[] = ["id", "name", "email"]
  ){
    const response = await this.prisma.user.findFirst({
      where: {id},
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async findMany(){
    const response = await this.prisma.user.findMany();
    return response
  }

}