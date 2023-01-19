import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationCreateInput } from "../../../inputs/LocationCreateInput";
import { LocationUpdateInput } from "../../../inputs/LocationUpdateInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateInput, {
    nullable: false
  })
  create!: LocationCreateInput;

  @TypeGraphQL.Field(_type => LocationUpdateInput, {
    nullable: false
  })
  update!: LocationUpdateInput;
}
