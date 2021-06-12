/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { SubcontrataService } from '../services/subcontrata.service';

@Controller('subcontrata')
export class SubcontrataController {
  constructor(private readonly service: SubcontrataService) {}

}