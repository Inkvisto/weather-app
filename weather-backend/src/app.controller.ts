import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { Prisma, User as UserModel } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import LocalAuthGuard  from './guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    
  ) {}


}