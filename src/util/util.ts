/* eslint-disable prettier/prettier */
import {CierreModel} from '../models/cierre.model';
import {Cierre} from '../entities/cierre.entity';
import { UserModel } from '../models/user.model';
import { UserEntity } from '../entities/user.entity';

export const transformCierre = (c: CierreModel): Cierre=>{
    const cierre: Cierre = new Cierre();
    cierre.acumulado=c.acumulado;
    cierre.mes=c.mes;
    cierre.total=c.total;
    if(c.id)
        cierre.id=c.id;
    return cierre;
}

export const transformUser = (userModel: UserModel): UserEntity=>{
    const user = new UserEntity();
    user.username = userModel.username;
    user.password = userModel.password;
    if(userModel.role)
        user.role = userModel.role;
    if(userModel.id)
        user.id = userModel.id;
    return user; 
}