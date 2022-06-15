import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from './user.model';


@ObjectType()
export class Auth {
  @Field(type=>UserModel)  
  user: UserModel;
  @Field()
  accessToken: string;
  @Field()
  refreshToken:string;
}
