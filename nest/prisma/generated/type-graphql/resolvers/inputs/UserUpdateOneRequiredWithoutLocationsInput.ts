import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLocationsInput } from "../inputs/UserCreateOrConnectWithoutLocationsInput";
import { UserCreateWithoutLocationsInput } from "../inputs/UserCreateWithoutLocationsInput";
import { UserUpdateWithoutLocationsInput } from "../inputs/UserUpdateWithoutLocationsInput";
import { UserUpsertWithoutLocationsInput } from "../inputs/UserUpsertWithoutLocationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLocationsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLocationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLocationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLocationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLocationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLocationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLocationsInput | undefined;
}
