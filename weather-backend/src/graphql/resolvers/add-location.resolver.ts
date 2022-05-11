
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { AddLocationService } from "../../add-location/add-location.service";
import { AddLocation } from "../models/add-location.model";
import { CreateAddLocationInput } from "../models/inputs/create-add-location.input";
import { GqlAuthGuard } from "../../guards/graphql-jwt-auth.guard";
import { AddLocationIdArgs } from "../models/args/add-location-id.args";

import { UserIdArgs } from "../models/args/userLocations.input";

@Resolver(()=>AddLocation)
export class AddLocationResolver{
    constructor(
        private prisma:PrismaService,
        private readonly addLocation:AddLocationService
    ){}
    
   
    @UseGuards(GqlAuthGuard)
    @ResolveField('user',()=>AddLocation)
    async findUserLocations(@Parent() userId:UserIdArgs){
        return await this.prisma.addLocation.findMany({
            where:{
                userId:userId.id
            }
        })
        
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(()=>AddLocation)
    async createLocation(@Args('locationData') data:CreateAddLocationInput,user:User){
       return await this.addLocation.createLocation(data,user)
       
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(()=>AddLocation)
    async deleteLocation(@Args() data:AddLocationIdArgs){
        return await this.addLocation.deleteLocation(data)
       
    }
}