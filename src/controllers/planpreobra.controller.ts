/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { PlanPreService } from '../services/planpre.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('planpre')
export class PlanPreController {
  constructor(private readonly service: PlanPreService) {}

}