import { Field, InputType, InterfaceType, ObjectType } from "@nestjs/graphql";
import { Exclude } from "class-transformer";

@ObjectType()
export class Token {
  @Field()
  accessToken: string;
  @Field()
  refreshToken:string;
}



