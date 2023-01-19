import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationOrderByWithRelationInput } from "../../../inputs/LocationOrderByWithRelationInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";
import { LocationScalarFieldEnum } from "../../../../enums/LocationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "icon" | "temperature" | "place" | "userId"> | undefined;
}
