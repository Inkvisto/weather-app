
import { Mutation, Query, Resolver } from "@nestjs/graphql";

import { UserService } from "../../user/user.service";
import { UserModel } from "../models/user.model";
import { GraphqlUserEntity, UserEntity } from "src/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/guards/graphql-jwt-auth.guard";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";



@Resolver(() => UserModel)
export class UserResolver {
    constructor(
        private userService: UserService,
        private prisma: PrismaService
    ) { }

    @Query(() => UserModel)
    @UseGuards(GqlAuthGuard)
    getUserByToken(@GraphqlUserEntity() user: UserModel) {
        return user
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserModel)
    deleteUser(@UserEntity() user: User) {
        return this.userService.deleteUser(user)
    }


}

