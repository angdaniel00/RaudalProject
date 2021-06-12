/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InfContrato } from '../entities/infcont.entity';
import {INFCONTRATO_REPOSITORY} from '../util/constant';

@Injectable()
export class InfContratoService {
  constructor(
    @Inject(INFCONTRATO_REPOSITORY)
    private infRepository: Repository<InfContrato>,
  ) {}

  async findAll(): Promise<InfContrato[]> {
    return this.infRepository.find();
  }
}
