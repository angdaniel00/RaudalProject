/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { SubobraService } from '../services/subobra.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('subobra')
export class SubObraController {
  constructor(private readonly service: SubobraService) {}

}