import * as TypeGraphQL from "type-graphql";

export enum LocationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  icon = "icon",
  temperature = "temperature",
  place = "place",
  userId = "userId"
}
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
  name: "LocationScalarFieldEnum",
  description: undefined,
});
