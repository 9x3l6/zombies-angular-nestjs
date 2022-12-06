import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { channelProviders } from './channels.providers';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { DatabaseModule } from 'src/database/database.module';
import { Channel } from './channel.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Channel,
    ]),
  ],
  controllers: [ChannelsController],
  providers: [
    ...channelProviders,
    ChannelsService,
  ]
})
export class ChannelsModule {}
