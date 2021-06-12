/* eslint-disable prettier/prettier */
import { createConnection } from 'typeorm';
import { Cierre } from '../entities/cierre.entity';
import { Contrato } from '../entities/contrato.entity';
import { InfContrato } from '../entities/infcont.entity';
import { Inversionista } from '../entities/inversionistas.entity';
import { Obra } from '../entities/obra.entity';
import { PlanAnual } from '../entities/plan.entity';
import { PlanPreparacionObra } from '../entities/planpreobra.entity';
import { RegistroContabilidad } from '../entities/registro.entity';
import { Resumen } from '../entities/resumen.entity';
import { Subcontrata } from '../entities/subcontrata.entity';
import { Subobra } from '../entities/subobra.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'BlackWasp00',
      database: 'raudal',
      entities: [Cierre, Contrato, InfContrato, Inversionista, Obra, PlanAnual, PlanPreparacionObra, RegistroContabilidad, Resumen, Subcontrata, Subobra],
      synchronize: true,
    }),
  },
];
