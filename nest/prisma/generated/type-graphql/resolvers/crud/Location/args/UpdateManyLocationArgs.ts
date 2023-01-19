import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationUpdateManyMutationInput } from "../../../inputs/LocationUpdateManyMutationInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationArgs {
  @TypeGraphQL.Field(_type => LocationUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
