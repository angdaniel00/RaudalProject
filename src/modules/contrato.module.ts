/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { contratoProviders } from '../providers/entities.provider';
import { ContratoService } from '../services/contrato.service';
import { ContratoController } from '../controllers/contrato.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...contratoProviders,
    ContratoService,
  ],
  controllers: [ContratoController],
})
export class ContratoModule {}