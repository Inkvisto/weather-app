import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from "@nestjs/common"
import { UserIdArgs } from "../graphql/models/args/userLocations.input"
import { UserService } from "./user.service"
import { UserEntity } from "src/decorators/user.decorator"
import { UserModel } from "src/graphql/models/user.model"

import JwtAuthGuard from "src/guards/jwt-auth.guard"




@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/getUser')
  getUserByToken(@UserEntity() user:UserModel) {
    return new UserModel(user)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/delete')
  async deleteUser(@UserEntity() user:UserModel) {
    return this.userService.deleteUser(user)
  }
}

