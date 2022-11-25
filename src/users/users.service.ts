import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: CreateUserDto) {
    await this.userRepository.insert(user);
  }

  async findAll() {
    let found = await this.userRepository.find();
    found = found.map((obj) => {
      let entity = new UserEntity();
      entity = { ...obj };
      return entity;
    });
    return found
  }
}
