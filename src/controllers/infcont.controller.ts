/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { InfContratoService } from '../services/infcontrato.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('infcont')
export class InfContController {
  constructor(private readonly service: InfContratoService) {}

}