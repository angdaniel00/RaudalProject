/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { subobraProviders } from '../providers/entities.provider';
import { SubobraService } from '../services/subobra.service';
import { SubObraController } from '../controllers/subobra.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...subobraProviders,
    SubobraService,
  ],
  controllers: [SubObraController],
})
export class SubobraModule {}
