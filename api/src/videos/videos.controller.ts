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
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.videosService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let video = this.videosService.findOne(id);
    // if (!video) {
    //   throw new NotFoundException(`Video #${id} not found`);
    // }
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
