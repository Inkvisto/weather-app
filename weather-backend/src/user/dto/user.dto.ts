import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Token } from "src/graphql/models/token.model";


export class User{
  //@Exclude()
  id: string;

  email: string;

  username: string;

  

  @IsNotEmpty()
  @Exclude()
  password: string;


  constructor(partial: Partial<User>,token:Partial<Token>) {
    Object.assign(this, partial, token );
  }
}