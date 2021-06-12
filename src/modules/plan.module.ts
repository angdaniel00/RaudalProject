/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { planAnualProviders } from '../providers/entities.provider';
import { PlanService } from '../services/plananual.service';
import { PlanController } from '../controllers/plan.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...planAnualProviders,
    PlanService,
  ],
  controllers: [PlanController],
})
export class PlanModule {}