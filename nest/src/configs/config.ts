import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  security: {
    expiresIn: '15m',
    refreshIn: '1d',
    bcryptSaltOrRound: 10,
  },
  graphql: {
    playgroundEnabled: false,
    debug: true,
    schemaDestination: './src/schema.qraphql',
    sortSchema: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault()]
  }
};

export default (): Config => config;
