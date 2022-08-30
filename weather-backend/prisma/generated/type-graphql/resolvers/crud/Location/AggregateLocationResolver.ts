import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLocationArgs } from "./args/AggregateLocationArgs";
import { Location } from "../../../models/Location";
import { AggregateLocation } from "../../outputs/AggregateLocation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class AggregateLocationResolver {
  @TypeGraphQL.Query(_returns => AggregateLocation, {
    nullable: false
  })
  async aggregateLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationArgs): Promise<AggregateLocation> {
    return getPrismaFromContext(ctx).location.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
