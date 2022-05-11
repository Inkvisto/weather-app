import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";

@ArgsType()
export class UserIdArgs{
    @Field(()=>ID)
    id:string;
}
