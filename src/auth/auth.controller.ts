/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards, BadRequestException, Put, Delete, Param } from '@nestjs/common';
import { UserModel } from '../models/user.model';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor( private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() userModel: UserModel){
        return this.authService.login(userModel);
    }

    @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Body() userModel: UserModel){
        await this.authService.encryptPassword(userModel.password).then(hash=>{
            userModel.password = hash;
        }).catch(err=>{
            throw new BadRequestException(err.message);
        });
        return this.authService.register(userModel);
    }
    
    @UseGuards(JwtAuthGuard)
    @Put('update')
    async update(@Body() userModel: UserModel){
        await this.authService.encryptPassword(userModel.password).then(hash=>{
            userModel.password = hash;
        }).catch(err=>{
            throw new BadRequestException(err.message);
        });
        await this.authService.updatePerfil(userModel).then(()=>{
            return {message: "User update"};
        }).catch(err=>{
            throw new BadRequestException(err.message);
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.authService.deletePerfil(id).then(()=>{
            return {message: "User delete"}
        }).catch(err=>{
            throw new BadRequestException(err.message);
        })
    }
}
