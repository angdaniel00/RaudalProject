/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { planPreparacionObraProviders } from '../providers/entities.provider';
import { PlanPreService } from '../services/planpre.service';
import { PlanPreController } from '../controllers/planpreobra.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...planPreparacionObraProviders,
    PlanPreService,
  ],
  controllers: [PlanPreController],
})
export class PlanPreModule {}