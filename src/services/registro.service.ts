/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegistroContabilidad } from '../entities/registro.entity';
import {REGISTRO_REPOSITORY} from '../util/constant';

@Injectable()
export class RegistroService {
  constructor(
    @Inject(REGISTRO_REPOSITORY)
    private registroRepository: Repository<RegistroContabilidad>,
  ) {}

  async findAll(): Promise<RegistroContabilidad[]> {
    return this.registroRepository.find();
  }
}