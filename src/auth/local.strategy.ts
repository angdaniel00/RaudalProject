/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userModel: UserModel): Promise<any> {
    const user = await this.authService.validUsername(userModel);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  
}
