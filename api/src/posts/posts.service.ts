import { Injectable, Inject, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from 'src/categories/category.entity';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  // private posts: Post[] = []; //allPosts;

  constructor(
    // @InjectRepository(Post)
    @Inject('POST_REPOSITORY')
    private readonly repo: Repository<Post>,
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

  async findOne(link: string) {
    const item = await this.repo.findOne({ where: { link } });
    if (!item) {
      throw new NotFoundException(`Post &${link} not found`);
    }
    return item;
  }

  create(data: CreatePostDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  async update(id: any, data: UpdatePostDto) {
    const item = await this.repo.preload({
      id: id,
      ...data,
    });
    if (!item) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return this.repo.save(item);
  }

  async remove(id: any) {
    const item = await this.findOne(id);
    return this.repo.remove(item);
  }
}
