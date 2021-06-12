/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlanPreparacionObra {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  provincia: string;

  @Column('text')
  ejecutor: string;

  @Column('double precision')
  valorContratado: number;

  @Column('double precision')
  valorEjecutado: number;

  @Column('double precision')
  pronosticoEjecucion: number;

  @Column('double precision')
  cierraYearPronostico: number;

  @Column('double precision')
  observaciones: string;

  @Column('int')
  month: number;

  @Column('int')
  year: number;

  @Column('text')
  typePlan: string;
}