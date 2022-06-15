import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { UserIdArgs } from 'src/graphql/models/args/userLocations.input';

 
@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token'
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: (req:Request) => {
        if (!req || !req.cookies) return null;
        return req.cookies['refreshToken'];
      },
      secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: UserIdArgs) {
   
    console.log(payload);
    
    const UserWhereUniqueInputId = { id: payload.userId }
    const refreshToken = request.cookies.refreshToken;
    return this.authService.getUserIfRefreshTokenMatches(refreshToken, UserWhereUniqueInputId);
  }
}