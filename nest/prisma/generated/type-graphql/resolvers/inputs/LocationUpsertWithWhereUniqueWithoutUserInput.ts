import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutUserInput } from "../inputs/LocationCreateWithoutUserInput";
import { LocationUpdateWithoutUserInput } from "../inputs/LocationUpdateWithoutUserInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class LocationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutUserInput, {
    nullable: false
  })
  create!: LocationCreateWithoutUserInput;
}
