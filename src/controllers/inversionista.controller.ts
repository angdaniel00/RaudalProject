/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { InversionistaService } from '../services/inversionista.service';

@Controller('inv')
export class InversionistaController {
  constructor(private readonly service: InversionistaService) {}

}