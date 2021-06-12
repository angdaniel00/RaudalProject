/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { InfContratoService } from '../services/infcontrato.service';

@Controller('infcont')
export class InfContController {
  constructor(private readonly service: InfContratoService) {}

}