/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';
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
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    CierreModule, ContratoModule, InfContratoModule, InversionistaModule, ObraModule, PlanModule, PlanPreModule, RegistroModule, 
    ResumenModule, SubcontrataModule, SubobraModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
