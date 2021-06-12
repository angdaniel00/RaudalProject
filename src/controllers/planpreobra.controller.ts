/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { PlanPreService } from '../services/planpre.service';

@Controller('planpre')
export class PlanPreController {
  constructor(private readonly service: PlanPreService) {}

}