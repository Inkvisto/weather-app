import { ArgsType, Field, ID } from "@nestjs/graphql";

@ArgsType()
export class UserIdArgs{
    @Field(()=>ID)
    userId:string;
}
