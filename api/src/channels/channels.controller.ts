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
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async findAll(@Query() paginationQuery) {
    return await this.channelsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const item = this.channelsService.findOne(id);
    if (!item) {
      throw new NotFoundException(`Channel #${id} not found`);
    }
    return item;
  }

  @Post()
  create(@Body() body) {
    return this.channelsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.channelsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelsService.remove(id);
  }
}
