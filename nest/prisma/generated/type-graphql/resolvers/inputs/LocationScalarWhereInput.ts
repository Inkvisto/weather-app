import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LocationScalarWhereInput", {
  isAbstract: true
})
export class LocationScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  AND?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  OR?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  icon?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  temperature?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  place?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
