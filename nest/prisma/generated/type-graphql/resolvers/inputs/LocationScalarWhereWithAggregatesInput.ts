import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LocationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LocationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  icon?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  temperature?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  place?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
