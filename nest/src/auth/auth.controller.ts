import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Injectable, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { SignupInput } from '../graphql/models/inputs/signup.input';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/decorators/user.decorator';
import { LoginInput } from 'src/graphql/models/inputs/logininput';
import { UserModel } from 'src/graphql/models/user.model';

import JwtAuthGuard from 'src/guards/jwt-auth.guard'
import JwtRefreshGuard from 'src/guards/jwt-refresh-auth.guard';
import LocalAuthGuard from 'src/guards/local-auth.guard';

@Injectable()
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('/register')
  async register(@Body() user: SignupInput) {
    if (!user.email || !user.password || !user.username) {
      throw new BadRequestException('Wrong credentials provided', 'Registration Error')
    }
    return this.authService.register({
      username: user.username,
      email: user.email,
      password: user.password
    })

  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Res({ passthrough: true }) response: Response, @Body() userPayload: LoginInput, @UserEntity() user: UserModel) {

    const token = await this.authService.login(userPayload.email, userPayload.password)

    await this.authService.setCurrentRefreshToken(token.refreshToken, user.id);

    response
      .cookie('authToken', token.accessToken, {
        httpOnly: true,
        domain: 'localhost',
        expires: new Date(Date.now() + 1000 * 60 * 15)
      })

    response
      .cookie('refreshToken', token.refreshToken, {
        httpOnly: true,
        domain: 'localhost',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15)
      })

   
      

    return new UserModel(user)
  }

  @UseGuards(JwtRefreshGuard)
  @Get('/refresh')
  refresh(@UserEntity() user: UserModel, @Res({ passthrough: true }) response: Response) {
    const accessToken = this.authService.generateAccessToken({ userId: user.id })

    response
      .cookie('authToken', accessToken, {
        httpOnly: true,
        domain: 'localhost',
        expires: new Date(Date.now() + 1000 * 60 * 15)
      })
    return new UserModel(user)
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@UserEntity() user: UserModel, @Res() response: Response) {
    await this.authService.removeRefreshToken(user.id)
    response.setHeader('Set-Cookie', this.authService.logout());
    response.send('user logout success')
  }
}
