/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Obra } from '../entities/obra.entity';
import {OBRA_REPOSITORY} from '../util/constant';

@Injectable()
export class ObraService {
  constructor(
    @Inject(OBRA_REPOSITORY)
    private obraRepository: Repository<Obra>,
  ) {}

  async findAll(): Promise<Obra[]> {
    return this.obraRepository.find();
  }
}