import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.model';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
  @Field(type=>User)  
  user: User;
}
