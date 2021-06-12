/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { cierreProviders } from '../providers/entities.provider';
import { CierreService } from '../services/cierre.service';
import { CierreController } from '../controllers/cierre.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...cierreProviders,
    CierreService,
  ],
  controllers: [CierreController],
})
export class CierreModule {}