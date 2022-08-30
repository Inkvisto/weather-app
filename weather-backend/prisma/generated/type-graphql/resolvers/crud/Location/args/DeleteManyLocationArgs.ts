import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
