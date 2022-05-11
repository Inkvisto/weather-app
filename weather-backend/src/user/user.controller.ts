import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common"


import { PrismaService } from "src/prisma/prisma.service"
import { UserIdArgs } from "../graphql/models/args/userLocations.input"
import { UserService } from "./user.service"

 
 
 @Controller('user')
 export class UserController {
   constructor(
     private readonly userService: UserService,
     private readonly prisma:PrismaService
   ) {}


  @Get('/all')
  async getUser(){
    return this.userService.getUsers()
  }

  @Post('/delete')
  async deleteUser(@Body() id:UserIdArgs ){
    return this.userService.deleteUser(id)
  }
}

