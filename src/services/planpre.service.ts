/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PlanPreparacionObra } from '../entities/planpreobra.entity';
import {PLANPRE_REPOSITORY} from '../util/constant';

@Injectable()
export class PlanPreService {
  constructor(
    @Inject(PLANPRE_REPOSITORY)
    private planPreRepository: Repository<PlanPreparacionObra>,
  ) {}

  async findAll(): Promise<PlanPreparacionObra[]> {
    return this.planPreRepository.find();
  }
}