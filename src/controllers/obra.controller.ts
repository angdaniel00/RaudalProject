/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { ObraService } from '../services/obra.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('obra')
export class ObraController {
  constructor(private readonly service: ObraService) {}

}