import { Field, InputType, Int } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { User } from "../../../user/user.model";

@InputType()
export class CreateAddLocationInput {
    @Field()
    place:string;
    @Field(type=>Int)
    temperature:number;
    @Field()
    icon:string;
}
