import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserInput): Promise<UserEntity> {
    const user = await this.usersRepository.save({
      oauthId: data.oauthId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      picture: data.picture,
    });

    return user;
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOne(id);
  }
}
