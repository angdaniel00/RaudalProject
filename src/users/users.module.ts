/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from '../providers/entities.provider';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  exports: [
    ...usersProviders,
    UsersService,
  ]
})
export class UserModule {}
