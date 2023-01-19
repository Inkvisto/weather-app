import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLocationsInput } from "../inputs/UserCreateWithoutLocationsInput";
import { UserUpdateWithoutLocationsInput } from "../inputs/UserUpdateWithoutLocationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutLocationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutLocationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLocationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLocationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLocationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLocationsInput;
}
