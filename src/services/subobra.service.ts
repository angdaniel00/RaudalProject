/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subobra } from '../entities/subobra.entity';
import {SUBOBRA_REPOSITORY} from '../util/constant';

@Injectable()
export class SubobraService {
  constructor(
    @Inject(SUBOBRA_REPOSITORY)
    private subobraRepository: Repository<Subobra>,
  ) {}

  async findAll(): Promise<Subobra[]> {
    return this.subobraRepository.find();
  }
}
