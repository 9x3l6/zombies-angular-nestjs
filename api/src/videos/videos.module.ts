import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { videoProviders } from './videos.providers';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { Video } from './video.entity';
import { Category } from 'src/categories/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from 'src/categories/categories.providers';


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
    VideosService,
  ]
})
export class VideosModule {}
