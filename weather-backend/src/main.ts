import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { CorsConfig } from './configs/config.interface';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());

  const configService = app.get(ConfigService);
  const corsConfig = configService.get<CorsConfig>('cors');

  if (corsConfig.enabled) {
    app.enableCors({
      origin:'http://localhost:3000',
      methods:'GET,POST,PUT,PATCH,POST,DELETE',
      allowedHeaders:'Origin, Content-Type',
      credentials:true
      
    });
  }
  
  await app.listen(process.env.PORT || 5555);

}

bootstrap();
