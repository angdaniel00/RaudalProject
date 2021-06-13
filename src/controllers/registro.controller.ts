/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { RegistroService } from '../services/registro.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('registro')
export class RegistroController {
  constructor(private readonly service: RegistroService) {}

}