/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Contrato } from './contrato.entity';
import { Inversionista } from './inversionistas.entity';

@Entity()
export class Obra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  cant: number;

  @Column({type: 'date', nullable: false})
  fechaInicio: Date;

  @Column({type: 'date', nullable: false})
  fechaTerminacion: Date;

  @Column({type: 'date', nullable: false})
  realTerminacion: Date;

  @Column({type: 'double precision', nullable: false})
  valorInicial: number;

  @Column('text')
  ejecucion: string;

  @OneToOne(type=> Contrato, contrato=>contrato.obra)
  contrato: Contrato;

  @OneToOne(type => Inversionista, cliente=>cliente.obra, {cascade: true})
  @JoinColumn()
  cliente: Inversionista
}