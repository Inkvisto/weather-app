import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../../user/user.model"

@ObjectType()
export class AddLocation {
    @Field(type=>ID)
    id:string;
    @Field()
    createdAt:Date;
    @Field()
    icon:string;
    @Field()
    place:string;
    @Field(()=>User)
    user:User;
    @Field(type=>Int)
    temperature:number;
    @Field()
    userId:string;

}

