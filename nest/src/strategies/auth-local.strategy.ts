import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserModel } from 'src/graphql/models/user.model';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'email'
    });
  }
  async validate(email: string, password: string): Promise<UserModel> {
    return this.authenticationService.getAuthenticatedUser(email, password);
  }
}