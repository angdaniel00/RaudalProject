/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UserModel } from '../models/user.model';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class AuthService {

    private readonly saltOrRounds: number = 10;

    constructor(
        private userService: UsersService,
        private jwtService: JwtService){}

    async encryptPassword(password: string){
        return await bcrypt.hash(password, this.saltOrRounds);
    }

    private async comparePassword(password: string, hash: string){
        return await bcrypt.compare(password, hash);
    }

    async validUsername(user: UserModel){
        const userAuth = await this.userService.findOne(user.username);
        if(!await this.comparePassword(user.password, userAuth.password))
            throw new UnauthorizedException();
        return userAuth;
    }

    async register(user: UserModel){
        const register: UserEntity= await this.userService.createUser(user);
        const payload = {username: register.username, sub: register.id};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async updatePerfil(userModel: UserModel){
        return this.userService.update(userModel);
    }

    async deletePerfil(id: number){
        return this.userService.delete(id);
    }

    async login(userModel: UserModel){
        const user: UserEntity = await this.validUsername(userModel);
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
