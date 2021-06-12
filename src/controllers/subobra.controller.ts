/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { SubobraService } from '../services/subobra.service';

@Controller('subobra')
export class SubObraController {
  constructor(private readonly service: SubobraService) {}

}