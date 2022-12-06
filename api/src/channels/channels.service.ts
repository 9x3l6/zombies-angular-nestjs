import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @Inject('CHANNEL_REPOSITORY')
    private readonly repo: Repository<Channel>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return await this.repo.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: any) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`Channel #${id} not found`);
    }
    return item;
  }

  create(data: CreateChannelDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  async update(id: any, data: UpdateChannelDto) {
    const item = await this.repo.preload({
      id: id,
      ...data,
    });
    if (!item) {
      throw new NotFoundException(`Channel #${id} not found`);
    }
    return this.repo.save(item);
  }

  async remove(id: any) {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
