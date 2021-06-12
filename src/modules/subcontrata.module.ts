/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { subcontrataProviders } from '../providers/entities.provider';
import { SubcontrataService } from '../services/subcontrata.service';
import { SubcontrataController } from '../controllers/subcontrata.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...subcontrataProviders,
    SubcontrataService,
  ],
  controllers: [SubcontrataController],
})
export class SubcontrataModule {}