import { Injectable, Inject, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Category } from 'src/categories/category.entity';
import { Video } from './video.entity';

@Injectable()
export class VideosService {
  // private videos: Video[] = []; //allVideos;

  constructor(
    // @InjectRepository(Video)
    @Inject('VIDEO_REPOSITORY')
    private readonly repo: Repository<Video>,
    // @InjectRepository(Category)
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

  create(data: CreateVideoDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  async update(id: any, data: UpdateVideoDto) {
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
