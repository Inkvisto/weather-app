import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { DateScalarMode, GraphQLModule, NumberScalarMode } from '@nestjs/graphql';
import { GraphqlConfig } from './configs/config.interface';
import { loggingMiddleware } from './prisma/logging.middleware';
import { ApolloDriver } from '@nestjs/apollo';

import config from './configs/config';
import { LocationModule } from './location/location.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: "integer" as NumberScalarMode,
            dateScalarMode: "timestamp" as DateScalarMode
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          plugins: graphqlConfig.plugins,
          context: ({ req }) => ({ req })
        };
      },
      inject: [ConfigService],
    }),
    LocationModule, AuthModule, UserModule,
  ],
  controllers: [],
  providers: [UserService, PrismaService],
})

export class AppModule {}