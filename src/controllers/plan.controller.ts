/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { PlanService } from '../services/plananual.service';

@Controller('plan')
export class PlanController {
  constructor(private readonly service: PlanService) {}

}