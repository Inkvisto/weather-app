import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Auth } from "../models/auth.model";
import { AuthService } from "../../auth/auth.service";
import { LoginInput } from "../models/inputs/login.input";
import { SignupInput } from "../models/inputs/signup.input";
import { TokenInput } from "../models/inputs/token.input";
import { User } from "../../user/user.model";
import { AuthUserInput } from "../models/inputs/auth-user.input";

@Resolver(()=>Auth)
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


    @Query(()=> User)
    async getUserFromToken(@Args('token') {authToken}:TokenInput){
        const token = {authToken}
        return await this.auth.getUserFromToken(token)
       
        
    }

    @Query(()=>User)
    async getAuthenticatedUser(@Args('user') {email,password}:AuthUserInput):Promise<User>{
      return await this.auth.getAuthenticatedUser(email,password)
      
    }
     
}