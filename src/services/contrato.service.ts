/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contrato } from '../entities/contrato.entity';
import {CONTRATO_REPOSITORY} from '../util/constant';

@Injectable()
export class ContratoService {
  constructor(
    @Inject(CONTRATO_REPOSITORY)
    private contratoRepository: Repository<Contrato>,
  ) {}

  async findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find();
  }
}
