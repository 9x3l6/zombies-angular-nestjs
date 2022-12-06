import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    // return this.users.find(user => user.username === username);
    const item = await this.repo.findOne({ where: { username } });
    if (!item) {
      throw new NotFoundException(`User @${username} not found`);
    }
    return item;
  }
}