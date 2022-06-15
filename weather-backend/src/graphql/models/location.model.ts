import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { UserModel } from "./user.model"

@ObjectType()
export class Location {
    @Field(type=>ID)
    id:string;
    @Field()
    createdAt:Date;
    @Field()
    icon:string;
    @Field()
    place:string;
    @Field(()=>UserModel)
    user:UserModel;
    @Field(type=>Int)
    temperature:number;
    @Field()
    userId:string;

}

