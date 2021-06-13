/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { SubcontrataService } from '../services/subcontrata.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('subcontrata')
export class SubcontrataController {
  constructor(private readonly service: SubcontrataService) {}

}