/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Obra } from './obra.entity';
import { PlanAnual } from './plan.entity';

@Entity()
export class Inversionista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: number;

  @OneToOne(type=> Obra, contrato=>contrato.cliente)
  obra: Obra;

  @OneToOne(type=> PlanAnual, plan=>plan.inversionista)
  plan: PlanAnual;
}