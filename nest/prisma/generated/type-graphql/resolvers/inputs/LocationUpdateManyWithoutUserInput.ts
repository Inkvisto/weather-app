import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyUserInputEnvelope } from "../inputs/LocationCreateManyUserInputEnvelope";
import { LocationCreateOrConnectWithoutUserInput } from "../inputs/LocationCreateOrConnectWithoutUserInput";
import { LocationCreateWithoutUserInput } from "../inputs/LocationCreateWithoutUserInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutUserInput } from "../inputs/LocationUpdateManyWithWhereWithoutUserInput";
import { LocationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutUserInput";
import { LocationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutUserInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class LocationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutUserInput], {
    nullable: true
  })
  create?: LocationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: LocationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: LocationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  set?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: LocationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: LocationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationScalarWhereInput[] | undefined;
}
