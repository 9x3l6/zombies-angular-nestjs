import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MusicService } from 'src/music/music.service';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(
    private readonly videosService: VideosService,
    private readonly musicService: MusicService,
  ) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.videosService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let video;
    try {
      video = this.videosService.findOne(id);
    } catch (error) {
      video = this.musicService.findOne(id);
    }    
    return video;
  }

  @Post()
  create(@Body() body) {
    return this.videosService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.videosService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
