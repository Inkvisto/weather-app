import * as TypeGraphQL from "type-graphql";
import { Location } from "../../../models/Location";
import { User } from "../../../models/User";
import { UserLocationsArgs } from "./args/UserLocationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Location], {
    nullable: false
  })
  async locations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLocationsArgs): Promise<Location[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).locations(args);
  }
}
