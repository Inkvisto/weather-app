import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAvgOrderByAggregateInput } from "../inputs/LocationAvgOrderByAggregateInput";
import { LocationCountOrderByAggregateInput } from "../inputs/LocationCountOrderByAggregateInput";
import { LocationMaxOrderByAggregateInput } from "../inputs/LocationMaxOrderByAggregateInput";
import { LocationMinOrderByAggregateInput } from "../inputs/LocationMinOrderByAggregateInput";
import { LocationSumOrderByAggregateInput } from "../inputs/LocationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationOrderByWithAggregationInput", {
  isAbstract: true
})
export class LocationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  temperature?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  place?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LocationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationSumOrderByAggregateInput | undefined;
}
