/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Obra } from './obra.entity';
import { PlanAnual } from './plan.entity';
import { RegistroContabilidad } from './registro.entity';
import { Subcontrata } from './subcontrata.entity';
import { Subobra } from './subobra.entity';

@Entity()
export class Contrato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({type: 'text', nullable: false})
  numContrato: string;

  @Column({type: 'date', nullable: false})
  fechaFirma: Date;

  @Column({type: 'double precision', nullable: false})
  valorInicial: number;

  @Column({type: 'double precision', nullable: false})
  cup: number;

  @Column({type: 'double precision', nullable: false})
  cuc: number;

  @OneToOne(type=>Obra, obra=>obra.contrato, {cascade: true})
  @JoinColumn()  
  obra: Obra;

  @OneToOne(type=> PlanAnual, plan=>plan.contrato)
  plan: PlanAnual

  @OneToOne(type=> RegistroContabilidad, registro=>registro.contrato)
  registro: RegistroContabilidad;

  @OneToOne(type=> Subcontrata, subcontrata=>subcontrata.contrato)
  subcontrata: Subcontrata;

  @OneToMany(type=>Subobra, subobras=>subobras.contrato, {cascade: true})
  subobras: Subcontrata[];
}
