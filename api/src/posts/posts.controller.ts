import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.postsService.findAll(paginationQuery);
  }

  @Get(':link')
  findOne(@Param('link') link: string) {
    const post = this.postsService.findOne(link);
    if (!post) {
      throw new NotFoundException(`Post &${link} not found`);
    }
    return post;
  }

  @Post()
  create(@Body() body) {
    return this.postsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.postsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
