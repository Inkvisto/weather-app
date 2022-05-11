import { Controller, Get, Post, Body, UseGuards, Req, Query } from '@nestjs/common';
import JwtAuthGuard from 'src/guards/jwt-auth.guard';
import RequestWithUser from 'src/user/requestwithUser.interface';
import { AddLocationService } from './add-location.service';
import { CreateAddLocationInput } from '../graphql/models/inputs/create-add-location.input';


@Controller('add-location')
export class AddLocationController {
  constructor(private readonly addLocationService: AddLocationService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body()addLocationData:CreateAddLocationInput,@Req() req:RequestWithUser) {
    const user = req.user
    const {place,icon,temperature} = addLocationData
    return this.addLocationService.createLocation({
      place:place,
      icon:icon,
      temperature:temperature
    },user
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/find')
  find(@Query() userId:{id:string}){
    return this.addLocationService.findUserLocations(userId)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/delete')
  delete(@Body()  id:{id:string}){

    return this.addLocationService.deleteLocation(id)
  }
}
