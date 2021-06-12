/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { resumenProviders } from '../providers/entities.provider';
import { ResumenService } from '../services/resumen.service';
import { ResumenController } from '../controllers/resumen.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...resumenProviders,
    ResumenService,
  ],
  controllers: [ResumenController],
})
export class ResumenModule {}