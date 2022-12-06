import { Injectable, Inject, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { Website } from './website.entity';

@Injectable()
export class WebsitesService {
  constructor(
    @Inject('WEBSITE_REPOSITORY')
    private readonly repo: Repository<Website>,
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
      throw new NotFoundException(`Website #${id} not found`);
    }
    return item;
  }

  create(data: CreateWebsiteDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  async update(id: any, data: UpdateWebsiteDto) {
    const item = await this.repo.preload({
      id: id,
      ...data,
    });
    if (!item) {
      throw new NotFoundException(`Website #${id} not found`);
    }
    return this.repo.save(item);
  }

  async remove(id: any) {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
