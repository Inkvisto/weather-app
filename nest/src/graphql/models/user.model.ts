import { Field, ObjectType } from "@nestjs/graphql";
import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@ObjectType()
export class UserModel {

  @Field()
  id: string;
  @Field()
  @Exclude()
  email: string;
  @Field()
  createdAt:Date;
  @Field()
  updatedAt:Date;
  @Field()
  username: string;
  @Field()
  @IsNotEmpty()
  @Exclude()
  password: string;
  @Field()
  @Exclude()
  refreshToken: string;

  constructor(partial: Partial<UserModel>) {
    Object.assign(this, partial);
  }
}