import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsJWT, IsNotEmpty } from 'class-validator';

@InputType()
export class TokenInput {
    @Field()
    @IsNotEmpty()
    @IsJWT()
    authToken: string;
}
