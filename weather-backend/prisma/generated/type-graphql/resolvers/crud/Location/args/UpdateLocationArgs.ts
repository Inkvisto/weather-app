import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationUpdateInput } from "../../../inputs/LocationUpdateInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLocationArgs {
  @TypeGraphQL.Field(_type => LocationUpdateInput, {
    nullable: false
  })
  data!: LocationUpdateInput;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;
}
