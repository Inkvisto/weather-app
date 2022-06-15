
import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../../prisma/prisma.service";
import { UserService } from "../../user/user.service";
import { UserModel } from "../models/user.model";
import { UserEntity } from "src/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/guards/graphql-jwt-auth.guard";


@Resolver(() => UserModel)
export class userResolver {
    constructor(
        private userService: UserService,
        private prisma: PrismaService
    ) { }


    @UseGuards(GqlAuthGuard)
    @Query(() => UserModel)
    getUserByToken(@UserEntity() user) {
        return user
    }
}

