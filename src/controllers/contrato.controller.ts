/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ContratoService } from '../services/contrato.service';

@Controller('contrato')
export class ContratoController {
  constructor(private readonly service: ContratoService) {}

}