import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Auth } from "../models/auth.model";
import { AuthService } from "../../auth/auth.service";

import { SignupInput } from "../models/inputs/signup.input";
import { UserModel } from "../models/user.model";
import { LoginInput } from "../models/inputs/logininput";

@Resolver(()=>UserModel)
export class AuthResolver {
    constructor(
        private readonly auth:AuthService
    ){}

    @Mutation(()=>Auth)
    async register(@Args('data') data:SignupInput) {
      data.email = data.email.toLowerCase();
      const user = await this.auth.register(data)
      return {user}
    }

    @Mutation(() => Auth)
    async login(@Args('data') { email, password }: LoginInput) {
      const user = await this.auth.login(
        email.toLowerCase(),
        password
      );
      return user
    }



    @Query(()=>Auth)
    async getAuthenticatedUser(@Args('user') {email,password}:LoginInput):Promise<UserModel>{
      return await this.auth.getAuthenticatedUser(email,password)
      
    }
     
}