import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddLocationInput } from '../graphql/models/inputs/create-add-location.input';
import { User } from '../user/user.model';


@Injectable()
export class AddLocationService {
  constructor(private prisma: PrismaService) {}

  findUserLocations(userId:{id:string}){
    try{
    return this.prisma.addLocation.findMany({
      where:{
        userId:userId.id
      }
    })
  }
  catch(e){
    throw new HttpException('Wrong UserId', HttpStatus.BAD_REQUEST);
    }
  }

  async createLocation(data:CreateAddLocationInput,user:User){
    try{
    const count = await this.prisma.addLocation.findMany()

    if(count.length >= 4){ throw new ConflictException(HttpStatus.CONFLICT,"Conflict: max count of add-location can't be more than 4")}
    return await this.prisma.addLocation.create({
      data:{
        temperature:data.temperature,
        icon:data.icon,
        place:data.place,
        user:{connect:{id:user.id}}
      }
    })
  }
  catch(e){
     if(e.code === 'P2002'){
  throw new ConflictException(`Place ${data.place} already declared.`);
 }  
  throw new Error(e);
  }
  }

  async deleteLocation(data:{id:string}){
    return await this.prisma.addLocation.delete({
      where:{id:data.id}
    })
  }
}


