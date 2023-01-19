import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CreateLocationInput {
    @Field()
    place:string;
    @Field(type=>Int)
    temperature:number;
    @Field()
    icon:string;
}
