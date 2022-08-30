import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';
import { validateInput } from 'src/graphql/models/inputs/validate-info.input';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: (req:Request) => {
      
        
        if (!req || !req.cookies) return null;
        return req.cookies['authToken'];
      },
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload:validateInput){
    
    return this.authService.validateUser(payload.userId)

  }
}
