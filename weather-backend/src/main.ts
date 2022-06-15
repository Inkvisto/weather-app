import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsConfig } from './configs/config.interface';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'

import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PrismaService } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  
  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);


  app.use(helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: false,
  }));

  const configService = app.get(ConfigService);
  const corsConfig = configService.get<CorsConfig>('cors');

  if (corsConfig.enabled) {
    app.enableCors({
      origin:['http://localhost:3000','https://studio.apollographql.com'],
      methods:'GET,POST,PUT,PATCH,POST,DELETE',
      allowedHeaders:'Origin, Content-Type',
      credentials:true
      
    });
  }
  
  await app.listen(process.env.PORT || 5555);

}

bootstrap();
