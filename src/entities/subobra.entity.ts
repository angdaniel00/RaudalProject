/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { InfContrato } from './infcont.entity';
import { Contrato } from './contrato.entity';

@Entity()
export class Subobra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  objeto: string;

  @Column('text')
  ejecucion: string;

  @Column('text')
  areaEjecutora: string;

  @Column('text')
  observacion: string;

  @Column('double precision')
  totalContratadoCUP: number;

  @Column('double precision')
  totalContratadoCUC: number;

  @Column('double precision')
  cupYearAnt: number;

  @Column('double precision')
  cucYearAnt: number;

  @ManyToOne(type=> Contrato, contrato=> contrato.subobras)
  contrato: Contrato;

  @ManyToOne(type=> InfContrato, infContrato=> infContrato.subobras)
  infContrato: InfContrato;
}