import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from 'src/strategies/auth-local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from 'src/strategies/jwt.strategy';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthResolver } from '../graphql/resolvers/auth.resolver';
import { PasswordService } from '../security/password.service';
import { JwtRefreshTokenStrategy } from 'src/strategies/jwt-refresh.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET')
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, PrismaService, JwtStrategy, JwtRefreshTokenStrategy, PasswordService, AuthResolver],
  controllers: [AuthController]
})
export class AuthModule { }