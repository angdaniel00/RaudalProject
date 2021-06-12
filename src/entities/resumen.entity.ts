/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Resumen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', nullable: false})
  fisico: number;

  @Column({type: 'double precision', nullable: false})
  valores: number;
}