/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { infContratoProviders } from '../providers/entities.provider';
import { InfContratoService } from '../services/infcontrato.service';
import { InfContController } from '../controllers/infcont.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...infContratoProviders,
    InfContratoService,
  ],
  controllers: [InfContController],
})
export class InfContratoModule {}