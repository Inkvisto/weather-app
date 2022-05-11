import { BadRequestException, Body, ClassSerializerInterceptor, Controller, HttpCode, Injectable, Post, Req,  Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {  Request, Response } from 'express';
import JwtAuthGuard from 'src/guards/jwt-auth.guard';
import LocalAuthGuard from 'src/guards/local-auth.guard';
import { User } from 'src/user/dto/user.dto';
import RequestWithUser from 'src/user/requestwithUser.interface';
import { SignupInput } from '../graphql/models/inputs/signup.input';

import { AuthService } from './auth.service';


@Injectable()
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    ) {}


  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Res({passthrough:true}) response:Response, @Req() request:Request) {
    const user = request.body;
  
    const token = await this.authService.login(user.email,user.password)
   
    response
    .cookie('authToken',token.accessToken,{
      httpOnly:true,
      domain:'localhost',
      expires:new Date(Date.now()+1000*60*60*24)
    })
   return new User(user,token)
  }
  
  
  @UseGuards(JwtAuthGuard)
  @Post('/getUser')
  getUserFromToken(@Body() token:{authToken:string}){
    return this.authService.getUserFromToken(token)
  }


@Post('/register')
async register(@Body() user:SignupInput){
  if(!user.email  || !user.password || !user.username ){
    throw new BadRequestException('Wrong credentials provided','Registration Error')
  }
    return this.authService.register({
      username:user.username,
      email:user.email,
      password:user.password
    })


    }

    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    @Post('/logout')
    async logout(@Req() request: RequestWithUser, @Res() response: Response) {
      request.res.setHeader('Set-Cookie', this.authService.logout());
      response.send('user logout success')
    }


    
}
