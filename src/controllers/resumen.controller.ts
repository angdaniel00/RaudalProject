/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ResumenService } from '../services/resumen.service';

@Controller('resumen')
export class ResumenController {
  constructor(private readonly service: ResumenService) {}

}