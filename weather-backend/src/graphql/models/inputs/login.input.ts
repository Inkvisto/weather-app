import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


@InputType()
export class LoginInput {
  @Field()
  email: string;
  @Field()
  password: string;
}