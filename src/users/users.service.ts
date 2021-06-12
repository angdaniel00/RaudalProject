/* eslint-disable prettier/prettier */
import { Inject, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { USER_AUTH_REPOSITORY } from '../util/constant';
import { UserModel } from '../models/user.model';
import { transformUser } from '../util/util';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_AUTH_REPOSITORY)
        private userRepository: Repository<UserEntity>
    ){}

    async findOne(user: string): Promise<UserEntity>{
        return this.userRepository.findOneOrFail({where:{username:user}}).then(u=>{
            return {...u}
        }).catch(()=>{
            throw new UnauthorizedException();
        })
    }

    async createUser(userModel: UserModel): Promise<UserEntity>{
        const user: UserEntity = transformUser(userModel);
        return this.userRepository.save(user);
    }

    async update(userModel: UserModel): Promise<UserEntity>{
        const user: UserEntity = transformUser(userModel);
        return this.userRepository.save(user);
    }

    async delete(id: number){
        this.userRepository.findOneOrFail(id).then(user=>{
            return this.userRepository.remove(user); 
        }).catch(err=>{
            throw new NotFoundException(err.message);
        });
    }
}
