import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocationResolver } from '../graphql/resolvers/location.resolver';

@Module({
  controllers: [LocationController],
  providers: [LocationService, PrismaService, LocationResolver]
})
export class LocationModule { }
