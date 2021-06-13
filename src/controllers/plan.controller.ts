/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { PlanService } from '../services/plananual.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('plan')
export class PlanController {
  constructor(private readonly service: PlanService) {}

}