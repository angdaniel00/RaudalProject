/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { registroContabilidadProviders } from '../providers/entities.provider';
import { RegistroService } from '../services/registro.service';
import { RegistroController } from '../controllers/registro.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...registroContabilidadProviders,
    RegistroService,
  ],
  controllers: [RegistroController],
})
export class RegistroModule {}