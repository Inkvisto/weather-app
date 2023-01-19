import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;
}
