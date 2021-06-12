/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlanAnual } from '../entities/plan.entity';
import {PLANANUAL_REPOSITORY} from '../util/constant';

@Injectable()
export class PlanService {
  constructor(
    @Inject(PLANANUAL_REPOSITORY)
    private planRepository: Repository<PlanAnual>,
  ) {}

  async findAll(): Promise<PlanAnual[]> {
    return this.planRepository.find();
  }
}