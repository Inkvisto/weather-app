
import { Args, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../../prisma/prisma.service";
import { UserService } from "../../user/user.service";
import { User } from "../../user/user.model";


@Resolver(()=>User)
export class userResolver {
    constructor(
        private user:UserService,
        private prisma:PrismaService
    ){}

    
    @Query(() => User)
    async getByEmail(@Args('email', { type: () => String }) email: string){
        return this.prisma.user.findUnique({where:{email:email}})
    }

    @Query(() => User)
    async getUsers(){
        return this.user.getUsers()
    }




}

