import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutUserInput } from "../inputs/LocationCreateWithoutUserInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class LocationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutUserInput, {
    nullable: false
  })
  create!: LocationCreateWithoutUserInput;
}
