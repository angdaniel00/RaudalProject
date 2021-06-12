/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { InfContrato } from './infcont.entity';
import { Contrato } from './contrato.entity';

@Entity()
export class RegistroContabilidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', nullable: false})
  month: number;

  @Column({type: 'int', nullable: false})
  year: number;

  @Column({type: 'date', nullable: false})
  fechaInicio: Date;

  @Column({type: 'date', nullable: false})
  fechaTermincaion: Date;

  @OneToOne(type=> InfContrato, infContrato=>infContrato.registro, {cascade: true})
  @JoinColumn()
  infContrato: InfContrato;

  @OneToOne(type=> Contrato, plan=>plan.registro, {cascade: true})
  @JoinColumn()
  contrato: Contrato;
}