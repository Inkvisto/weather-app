import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyUserInputEnvelope } from "../inputs/LocationCreateManyUserInputEnvelope";
import { LocationCreateOrConnectWithoutUserInput } from "../inputs/LocationCreateOrConnectWithoutUserInput";
import { LocationCreateWithoutUserInput } from "../inputs/LocationCreateWithoutUserInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class LocationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutUserInput], {
    nullable: true
  })
  create?: LocationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: LocationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;
}
