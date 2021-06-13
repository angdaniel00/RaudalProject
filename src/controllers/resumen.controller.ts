/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { ResumenService } from '../services/resumen.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('resumen')
export class ResumenController {
  constructor(private readonly service: ResumenService) {}

}