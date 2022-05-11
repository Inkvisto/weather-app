import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthService } from 'src/auth/auth.service';


 interface JwtDto {
  userId: string;
  /**
   * Issued at
   */
  iat: number;
  /**
   * Expiration time
   */
  exp: number;
}


 
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest:(req) => {
        if (!req || !req.cookies) return null;
        return req.cookies['authToken'];
      },
      ignoreExpiration:false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload:any): Promise<any> {
    return this.authService.validateUser(payload.userId)

  }
}
