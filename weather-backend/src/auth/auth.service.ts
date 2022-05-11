
import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Token, } from '../graphql/models/token.model';
import { ConfigService } from '@nestjs/config';

import { SignupInput } from '../graphql/models/inputs/signup.input';
import { SecurityConfig } from 'src/configs/config.interface';
import { PasswordService } from '../security/password.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma:PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {}

  async validateUser(userId: string) {
   try{
    return await this.prisma.user.findUnique({ where: { id: userId } });
   }catch(e){
      throw new NotFoundException('userId undefined')
   }
  }

  async login(email: string,password:string) {


    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }
   

    const passwordValid = await this.passwordService.validatePassword(password,user.password)
  

    if (!passwordValid) {
  
      throw new BadRequestException('Invalid password');
    }

    return this.generateTokens({
      userId: user.id,
    })
 
  }

  generateTokens(payload: { userId: string }) {
    return {
    accessToken: this.generateAccessToken(payload),
     refreshToken:this.generateRefreshToken(payload)
    };
  }

  private generateAccessToken(payload: { userId: string }) {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload,{
      secret: this.configService.get('JWT_ACCESS_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  private generateRefreshToken(payload: { userId: string }) {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  getUserFromToken(token:{authToken:string}) {
    
  try{
    const id = this.jwtService.decode(token.authToken)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }
  catch(e){
    throw new NotFoundException(`Token not found,or wrong provided`);
  }
  }




async register(payload: SignupInput) {
 
  const hashedPassword = await this.passwordService.hashPassword(
    payload.password
  );

  try {
    const user = await this.prisma.user.create({
      data: {
        ...payload,
        password: hashedPassword
      },
    });
  
    return user;
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === 'P2002'
    ) {
      throw new ConflictException(`Email ${payload.email} already used.`);
    } else {
      throw new Error(e);
    }
  }
  }


  public async getAuthenticatedUser(email: string, password: string) {
    try {
  
      const user = await this.userService.getByEmail(email);
  
  
      if (password === user.password) {
  
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      }
      
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }


  public logout(){
    return `authToken=; HttpOnly; Path=/; Max-Age=0`;
  }
}
  
  
