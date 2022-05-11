import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AddLocation } from "../graphql/models/add-location.model";

@ObjectType()
export class User {
    @Field(type=>ID)
    id:string;
    @Field()
    createdAt:Date;
    @Field()
    updatedAt:Date;
    @Field()
    email:string;
    @Field()
    username:string;
    @Field()
    password:string;
    @Field({nullable:true})
    searchValue?:string;
}

