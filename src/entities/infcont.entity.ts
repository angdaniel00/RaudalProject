/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { RegistroContabilidad } from './registro.entity';
import { Subcontrata } from './subcontrata.entity';
import { Subobra } from './subobra.entity';

@Entity()
export class InfContrato {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('double precision')
  acumulado: number;

  @Column('int')
  mes: number;

  @Column('double precision')
  total: number;

  @OneToOne(type=> RegistroContabilidad, registro=>registro.infContrato)
  registro: RegistroContabilidad;

  @OneToOne(type=> Subcontrata, subcontrata=>subcontrata.infContrato, {cascade: true})
  subcontrata: Subcontrata;

  @OneToMany(type=> Subobra, subobra=>subobra.infContrato)
  subobras: Subobra[];
}