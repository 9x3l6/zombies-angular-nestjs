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
import { WebsitesService } from './websites.service';

@Controller('websites')
export class WebsitesController {
  constructor(private readonly websitesService: WebsitesService) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.websitesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const video = this.websitesService.findOne(id);
    if (!video) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return video;
  }

  @Post()
  create(@Body() body) {
    return this.websitesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.websitesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.websitesService.remove(id);
  }
}
