import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class AuthUserInput{
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @Field()
    @MinLength(8)
    password:string;
}
