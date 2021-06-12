/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Resumen } from '../entities/resumen.entity';
import {RESUMEN_REPOSITORY} from '../util/constant';

@Injectable()
export class ResumenService {
  constructor(
    @Inject(RESUMEN_REPOSITORY)
    private resumenRepository: Repository<Resumen>,
  ) {}

  async findAll(): Promise<Resumen[]> {
    return this.resumenRepository.find();
  }
}