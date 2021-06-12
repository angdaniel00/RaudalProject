/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ObraService } from '../services/obra.service';

@Controller('obra')
export class ObraController {
  constructor(private readonly service: ObraService) {}

}