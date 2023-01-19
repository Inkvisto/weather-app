import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyUserInput } from "../inputs/LocationCreateManyUserInput";

@TypeGraphQL.InputType("LocationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class LocationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationCreateManyUserInput], {
    nullable: false
  })
  data!: LocationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
