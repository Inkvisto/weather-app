import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationCreateManyInput } from "../../../inputs/LocationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocationArgs {
  @TypeGraphQL.Field(_type => [LocationCreateManyInput], {
    nullable: false
  })
  data!: LocationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
