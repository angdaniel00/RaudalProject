/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { obraProviders } from '../providers/entities.provider';
import { ObraService } from '../services/obra.service';
import { ObraController } from '../controllers/obra.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...obraProviders,
    ObraService,
  ],
  controllers: [ObraController],
})
export class ObraModule {}