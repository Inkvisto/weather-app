import { HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  User,
  Prisma
} from '@prisma/client';
import JwtAuthGuard from '../guards/jwt-auth.guard';
import { UserIdArgs } from '../graphql/models/args/userLocations.input';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  async getByEmail(email:string) {
    const user = await this.prisma.user.findUnique({where:{
      email:email
    }});
    if(user){
      return user
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }


  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  @UseGuards(JwtAuthGuard)
  async getUsers(){
      return this.prisma.user.findMany()
  }
  @UseGuards(JwtAuthGuard)
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(user:UserIdArgs) {
    return await this.prisma.user.delete({
      where:{
        id:user.id
      }
    });
  }
}