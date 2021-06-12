/* eslint-disable prettier/prettier */
import {CierreModel} from '../models/cierre.model';
import {Cierre} from '../entities/cierre.entity';

export const transformCierre = (c: CierreModel)=>{
    const cierre: Cierre = new Cierre();
    cierre.acumulado=c.acumulado;
    cierre.mes=c.mes;
    cierre.total=c.total;
    if(c.id)
        cierre.id=c.id;
    return cierre;
}