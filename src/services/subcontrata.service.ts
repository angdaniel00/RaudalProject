/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subcontrata } from '../entities/subcontrata.entity';
import {SUBCONTRATA_REPOSITORY} from '../util/constant';

@Injectable()
export class SubcontrataService {
  constructor(
    @Inject(SUBCONTRATA_REPOSITORY)
    private subcontrataRepository: Repository<Subcontrata>,
  ) {}

  async findAll(): Promise<Subcontrata[]> {
    return this.subcontrataRepository.find();
  }
}