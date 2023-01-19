import { ArgsType, Field } from "@nestjs/graphql";


@ArgsType()
export class LocationIdArgs {
    id:string;
}