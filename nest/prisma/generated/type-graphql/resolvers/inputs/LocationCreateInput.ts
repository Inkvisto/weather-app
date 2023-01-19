import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLocationsInput } from "../inputs/UserCreateNestedOneWithoutLocationsInput";

@TypeGraphQL.InputType("LocationCreateInput", {
  isAbstract: true
})
export class LocationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  temperature!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  place!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLocationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLocationsInput;
}
