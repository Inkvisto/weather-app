
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { LocationService } from "../../location/location.service";
import { Location } from "../models/location.model";
import { GqlAuthGuard } from "../../guards/graphql-jwt-auth.guard";
import { UserIdArgs } from "../models/args/userLocations.input";
import { UserModel } from "../models/user.model";
import { CreateLocationInput } from "../models/inputs/create-location.input";
import { LocationIdArgs } from "../models/args/location-id.args";

@Resolver(()=>Location)
export class LocationResolver{
    constructor(
        private prisma:PrismaService,
        private readonly Location:LocationService
    ){}
    
   
    @UseGuards(GqlAuthGuard)
    @ResolveField('user',()=>Location)
    async findUserLocations(@Parent() userId:UserIdArgs){
        return await this.prisma.location.findMany({
            where:{
                userId:userId.userId
            }
        })
        
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(()=>Location)
    async createLocation(@Args('locationData') data:CreateLocationInput,user:UserModel){
       return await this.Location.createLocation(data,user)
       
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(()=>Location)
    async deleteLocation(@Args() data:LocationIdArgs){
        return await this.Location.deleteLocation(data)
       
    }
}