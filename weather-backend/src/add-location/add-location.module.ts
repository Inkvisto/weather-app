import { Module } from '@nestjs/common';
import { AddLocationService } from './add-location.service';
import { AddLocationController } from './add-location.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddLocationResolver } from '../graphql/resolvers/add-location.resolver';

@Module({
  controllers: [AddLocationController],
  providers: [AddLocationService,PrismaService,AddLocationResolver]
})
export class AddLocationModule {}
