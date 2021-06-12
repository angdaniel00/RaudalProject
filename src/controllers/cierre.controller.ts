/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Param, Body, HttpStatus, Res } from "@nestjs/common";
import { Cierre } from "../entities/cierre.entity";
import { CierreService } from "../services/cierre.service";
import { CierreModel } from '../models/cierre.model';
import { transformCierre } from '../util/util';

@Controller('cierre')
export class CierreController {
    constructor(private readonly cierreService: CierreService){
    }

    @Get('all')
    findAll(): Promise<Cierre[]>{
        return this.cierreService.findAll();
    }

    @Get('single/:id')
    findId(@Param() params){
        return this.cierreService.findId(params.id);

    }

    @Delete(':id')
    delete(@Param() params){
        return this.cierreService.deleteCierre(params.id);
    }

    @Post()
    create(@Body() body: CierreModel){
        return this.cierreService.createCierre(transformCierre(body));
    }

    @Put()
    update(@Body() body: CierreModel){
        return this.cierreService.updateCierre(transformCierre(body));
    }
}