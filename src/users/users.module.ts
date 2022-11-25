import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { userProviders } from './users;provider';

@Module({
  controllers: [UsersController],
  providers: [...databaseProviders, ...userProviders, UsersService],
})
export class UsersModule {}
