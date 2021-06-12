/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text', nullable: false, unique: true})
  username: string;

  @Column({type: 'text', nullable: false})
  password: string;

  @Column({type: 'text', default: 'client'})
  role: string
}