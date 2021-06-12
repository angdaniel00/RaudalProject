/* eslint-disable prettier/prettier */
import { Connection } from 'typeorm';
import {Cierre} from '../entities/cierre.entity';
import {Contrato} from '../entities/contrato.entity';
import {InfContrato} from '../entities/infcont.entity';
import {Inversionista} from '../entities/inversionistas.entity';
import {Obra} from '../entities/obra.entity';
import {PlanAnual} from '../entities/plan.entity';
import {PlanPreparacionObra} from '../entities/planpreobra.entity';
import {RegistroContabilidad} from '../entities/registro.entity';
import {Resumen} from '../entities/resumen.entity';
import {Subcontrata} from '../entities/subcontrata.entity';
import {Subobra} from '../entities/subobra.entity';
import {CIERRE_REPOSITORY, CONTRATO_REPOSITORY, DATABASE_CONNECTION, INFCONTRATO_REPOSITORY, INVERSIONISTA_REPOSITORY,
OBRA_REPOSITORY, PLANANUAL_REPOSITORY, PLANPRE_REPOSITORY, REGISTRO_REPOSITORY, RESUMEN_REPOSITORY, SUBCONTRATA_REPOSITORY,
SUBOBRA_REPOSITORY} from '../util/constant';

export const cierreProviders = [
  {
    provide: CIERRE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Cierre),
    inject: [DATABASE_CONNECTION],
  },
];

export const contratoProviders = [
    {
      provide: CONTRATO_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Contrato),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const infContratoProviders = [
    {
      provide: INFCONTRATO_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(InfContrato),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const inversionistaProviders = [
    {
      provide: INVERSIONISTA_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Inversionista),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const obraProviders = [
    {
      provide: OBRA_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Obra),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const planAnualProviders = [
    {
      provide: PLANANUAL_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(PlanAnual),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const planPreparacionObraProviders = [
    {
      provide: PLANPRE_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(PlanPreparacionObra),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const registroContabilidadProviders = [
    {
      provide: REGISTRO_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(RegistroContabilidad),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const resumenProviders = [
    {
      provide: RESUMEN_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Resumen),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const subcontrataProviders = [
    {
      provide: SUBCONTRATA_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Subcontrata),
      inject: [DATABASE_CONNECTION],
    },
  ];

  export const subobraProviders = [
    {
      provide: SUBOBRA_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Subobra),
      inject: [DATABASE_CONNECTION],
    },
  ];
  