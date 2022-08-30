import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationListRelationFilter", {
  isAbstract: true
})
export class LocationListRelationFilter {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  every?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  some?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  none?: LocationWhereInput | undefined;
}
