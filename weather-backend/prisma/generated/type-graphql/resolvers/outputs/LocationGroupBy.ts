import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";

@TypeGraphQL.ObjectType("LocationGroupBy", {
  isAbstract: true
})
export class LocationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => LocationCountAggregate, {
    nullable: true
  })
  _count!: LocationCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationSumAggregate, {
    nullable: true
  })
  _sum!: LocationSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationMinAggregate, {
    nullable: true
  })
  _min!: LocationMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationMaxAggregate, {
    nullable: true
  })
  _max!: LocationMaxAggregate | null;
}
