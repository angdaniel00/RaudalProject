/* eslint-disable prettier/prettier */
import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cierre } from '../entities/cierre.entity';
import {CIERRE_REPOSITORY} from '../util/constant';

@Injectable()
export class CierreService {
  constructor(
    @Inject(CIERRE_REPOSITORY)
    private cierreRepository: Repository<Cierre>,
  ) {}

  async findAll(): Promise<Cierre[]> {
    return this.cierreRepository.find();
  }

  async findId(id: number){
    return this.cierreRepository.findOneOrFail(id).then(c=>{
      return c;
    }).catch(()=>{
      return null;
    });
  }

  async createCierre(cierre: Cierre): Promise<Cierre>{
    return this.cierreRepository.save(cierre);
  }

  async updateCierre(cierre: Cierre): Promise<Cierre>{
    return this.cierreRepository.save(cierre)
  }

  async deleteCierre(id: number){
    this.cierreRepository.findOneOrFail(id).then(c=>{
      this.cierreRepository.remove(c);
      return true;
    }).catch(()=> {return false;});
  }
}
