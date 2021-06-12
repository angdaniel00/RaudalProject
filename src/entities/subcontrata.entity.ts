/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { InfContrato } from './infcont.entity';
import { Contrato } from './contrato.entity';
import { PlanAnual } from './plan.entity';

@Entity()
export class Subcontrata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text', nullable: false})
  empresa: string;

  @Column({type: 'int', nullable: false})
  month: string;

  @Column({type: 'text', nullable: false})
  clasificacion: string;

  @Column({type: 'text', nullable: false})
  provincia: string;

  @Column({type: 'text', nullable: false})
  organismo: string;

  @Column({type: 'text', nullable: false})
  proveedor: string;

  @Column({type: 'date', nullable: false})
  fechaIncio: Date;

  @Column({type: 'date', nullable: false})
  fechaTerminacion: Date;

  @Column({type: 'double precision', nullable: false})
  valorTotalContratado: number;

  @Column({type: 'double precision', nullable: false})
  totalEjecutado: number;

  @Column({type: 'double precision', nullable: false})
  valorPendiente: number;

  @Column({type: 'double precision', nullable: false})
  valorContratadoMP: number;

  @Column({type: 'double precision', nullable: true})
  valorEjecutadoAcumuladoMP: number;

  @Column({type: 'double precision', nullable: true})
  valorPendiente1: number;

  @Column({type: 'double precision', nullable: true})
  ejecucion: number;

  @OneToOne(type=> Contrato, contrato=>contrato.subcontrata, { cascade: true})
  @JoinColumn()
  contrato: Contrato;

  @Column({type: 'date', nullable: false})
  fechaInicio: Date;

  @Column({type: 'date', nullable: false})
  fechaTermincaion: Date;

  @OneToOne(type=> InfContrato, infContrato=>infContrato.subcontrata)
  @JoinColumn()
  infContrato: InfContrato;

  @OneToOne(type=> PlanAnual, plan=> plan.subcontrata)
  @JoinColumn()
  plan: PlanAnual;
}