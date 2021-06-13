/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { InversionistaService } from '../services/inversionista.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('inv')
export class InversionistaController {
  constructor(private readonly service: InversionistaService) {}

}