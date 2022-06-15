import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userResolver } from '../graphql/resolvers/user.resolver';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService, userResolver],
    exports: [UserService]
})

export class UserModule { }
