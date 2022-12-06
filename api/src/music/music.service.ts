import { Injectable, Inject, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Category } from 'src/categories/category.entity';
import { Music } from './music.entity';

@Injectable()
export class MusicService {

  constructor(
    @Inject('MUSIC_REPOSITORY')
    private readonly repo: Repository<Music>,
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return await this.repo.find({
      relations: {
        categories: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: any) {
    const item = await this.repo.findOne({ where: [{ video_id: id }, { link: id }] });
    if (!item) {
      throw new NotFoundException(`Video #${id} not found`);
    }
    return item;
  }

  create(data: CreateMusicDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  async update(id: any, data: UpdateMusicDto) {
    const item = await this.repo.preload({
      id: id,
      ...data,
    });
    if (!item) {
      throw new NotFoundException(`Video #${id} not found`);
    }
    return this.repo.save(item);
  }

  async remove(id: any) {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
