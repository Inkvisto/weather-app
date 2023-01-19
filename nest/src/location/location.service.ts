import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLocationInput } from 'src/graphql/models/inputs/create-location.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModel } from '../graphql/models/user.model';


@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) { }

  findUserLocations(id: string) {
    try {
      return this.prisma.location.findMany({
        where: {
          userId: id
        }
      })
    }
    catch (e) {
      throw new HttpException('Wrong UserId', HttpStatus.BAD_REQUEST);
    }
  }

  async createLocation(data: CreateLocationInput, user: UserModel) {
    try {
      return await this.prisma.location.create({
        data: {
          temperature: data.temperature,
          icon: data.icon,
          place: data.place,
          user: { connect: { id: user.id } }
        }
      })
    }
    catch (e) {
      if (e.code === 'P2002') {
        throw new ConflictException(`Place ${data.place} already declared.`);
      }
      throw new Error(e);
    }
  }

  async updateLocation(data:{id:string,temp:number}){
    return await this.prisma.location.update({
      where:{
        id:data.id
      },
      data:{
        temperature:data.temp
      }
    })
  }

  async deleteLocation(data: { id: string }) {
    return await this.prisma.location.delete({
      where: { id: data.id }
    })
  }
}


