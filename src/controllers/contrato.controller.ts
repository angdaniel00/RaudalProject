/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { ContratoService } from '../services/contrato.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('contrato')
export class ContratoController {
  constructor(private readonly service: ContratoService) {}

}