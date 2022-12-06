import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { musicProviders } from '../music/music.providers';
import { videoProviders } from './videos.providers';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { Video } from './video.entity';
import { Category } from 'src/categories/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from 'src/categories/categories.providers';
import { MusicService } from 'src/music/music.service';


@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Video,
      Category
    ]),
  ],
  controllers: [VideosController],
  providers: [
    ...videoProviders,
    ...categoryProviders,
    ...musicProviders,
    VideosService,
    MusicService,
  ]
})
export class VideosModule {}
