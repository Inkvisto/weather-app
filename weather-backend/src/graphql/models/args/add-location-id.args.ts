import { ArgsType, Field } from "@nestjs/graphql";


@ArgsType()
export class AddLocationIdArgs {
    id:string;
}