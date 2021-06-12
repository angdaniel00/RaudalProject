/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Contrato } from './contrato.entity';
import { Inversionista } from './inversionistas.entity';
import { Subcontrata } from './subcontrata.entity';

@Entity()
export class PlanAnual {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'text', nullable: false})
  empresa: string;

  @Column('int')
  year: number;

  @Column('text')
  provincia: string;

  @Column('text')
  organismo: string;

  @Column('date')
  fechaInicio: Date;

  @Column('date')
  fechaTerminacion: Date;

  @OneToOne(type=>Contrato, contrato=> contrato.plan, {cascade: true})
  @JoinColumn()
  contrato: Contrato;

  @OneToOne(type=> Inversionista, inversionista=>inversionista.plan, {cascade: true})
  @JoinColumn()
  inversionista: Inversionista;

  @OneToOne(type=> Subcontrata, subcontrata=> subcontrata.plan)
  subcontrata: Subcontrata;
}