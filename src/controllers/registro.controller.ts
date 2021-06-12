/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { RegistroService } from '../services/registro.service';

@Controller('registro')
export class RegistroController {
  constructor(private readonly service: RegistroService) {}

}