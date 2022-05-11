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
    expiresIn: '90m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  graphql:{
    playgroundEnabled:true,
    debug:true,
    schemaDestination:'./src/schema.qraphql',
    sortSchema:true,
  }
};

export default (): Config => config;
