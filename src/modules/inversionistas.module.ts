/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { inversionistaProviders } from '../providers/entities.provider';
import { InversionistaService } from '../services/inversionista.service';
import { InversionistaController } from '../controllers/inversionista.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...inversionistaProviders,
    InversionistaService,
  ],
  controllers: [InversionistaController],
})
export class InversionistaModule {}