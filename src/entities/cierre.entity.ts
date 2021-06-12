/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cierre {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('double precision')
  acumulado: number;

  @Column('int')
  mes: number;

  @Column('double precision')
  total: number;
}
