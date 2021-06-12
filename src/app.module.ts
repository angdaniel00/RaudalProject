/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database/database.provider';
import { Cierre } from './entities/cierre.entity';
import { Contrato } from './entities/contrato.entity';
import { InfContrato } from './entities/infcont.entity';
import { Inversionista } from './entities/inversionistas.entity';
import { Obra } from './entities/obra.entity';
import { PlanAnual } from './entities/plan.entity';
import { PlanPreparacionObra } from './entities/planpreobra.entity';
import { RegistroContabilidad } from './entities/registro.entity';
import { Resumen } from './entities/resumen.entity';
import { Subcontrata } from './entities/subcontrata.entity';
import { Subobra } from './entities/subobra.entity';
import { CierreModule } from './modules/cierre.module';
import { ContratoModule } from './modules/contrato.module';
import { InfContratoModule } from './modules/infcont.module';
import { InversionistaModule } from './modules/inversionistas.module';
import { ObraModule } from './modules/obra.module';
import { PlanModule } from './modules/plan.module';
import { PlanPreModule } from './modules/planpreobra.module';
import { RegistroModule } from './modules/registro.module';
import { ResumenModule } from './modules/resumen.module';
import { SubcontrataModule } from './modules/subcontrata.module';
import { SubobraModule } from './modules/subobra.module';

@Module({
  imports: [
    CierreModule, ContratoModule, InfContratoModule, InversionistaModule, ObraModule, PlanModule, PlanPreModule, RegistroModule, 
    ResumenModule, SubcontrataModule, SubobraModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'BlackWasp00',
      database: 'raudal',
      entities: [Cierre, Contrato, InfContrato, Inversionista, Obra, PlanAnual, PlanPreparacionObra, RegistroContabilidad, Resumen, 
        Subcontrata, Subobra],
      synchronize: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
