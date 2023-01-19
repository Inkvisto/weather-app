import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutUserInput } from "../inputs/LocationUpdateWithoutUserInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class LocationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutUserInput;
}
