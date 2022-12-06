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
import { MusicService } from './music.service';

@Controller('videos')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.musicService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let video = this.musicService.findOne(id);
    // if (!video) {
    //   throw new NotFoundException(`Video #${id} not found`);
    // }
    return video;
  }

  @Post()
  create(@Body() body) {
    return this.musicService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.musicService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(id);
  }
}
