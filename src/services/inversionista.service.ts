/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Inversionista } from '../entities/inversionistas.entity';
import {INVERSIONISTA_REPOSITORY} from '../util/constant';

@Injectable()
export class InversionistaService {
  constructor(
    @Inject(INVERSIONISTA_REPOSITORY)
    private invRepository: Repository<Inversionista>,
  ) {}

  async findAll(): Promise<Inversionista[]> {
    return this.invRepository.find();
  }
}