import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Auth } from "../models/auth.model";
import { AuthService } from "../../auth/auth.service";

import { SignupInput } from "../models/inputs/signup.input";
import { UserModel } from "../models/user.model";
import { LoginInput } from "../models/inputs/logininput";
import { GraphqlUserEntity, UserEntity } from "src/decorators/user.decorator";
import { Res, UseGuards } from "@nestjs/common";
import { Response } from "express";


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
    async login(@Res({ passthrough: true }) response: Response,@Args('data') { email, password }: LoginInput) {
      const token = await this.auth.login(
        email.toLowerCase(),
        password
      );
      return token
    }

}