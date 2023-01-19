import { Controller, Get, Post, Body, UseGuards, Query, Patch } from '@nestjs/common';
import JwtAuthGuard from 'src/guards/jwt-auth.guard';
import { LocationService } from './location.service';
import { UserEntity } from 'src/decorators/user.decorator';
import { UserModel } from 'src/graphql/models/user.model';
import { CreateLocationInput } from 'src/graphql/models/inputs/create-location.input';
import { LocationIdArgs } from 'src/graphql/models/args/location-id.args';



@Controller('location')
export class LocationController {
  constructor(private readonly LocationService: LocationService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() LocationData: CreateLocationInput, @UserEntity() user: UserModel) {

    const { place, icon, temperature } = LocationData
    return this.LocationService.createLocation({
      place: place,
      icon: icon,
      temperature: temperature
    }, user
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/find')
  find(@Query('id') id: string) {
    return this.LocationService.findUserLocations(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() data:{id:string,temp:number}){
    return this.LocationService.updateLocation(data)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/delete')
  delete(@Body() id: LocationIdArgs) {

    return this.LocationService.deleteLocation(id)
  }
}
