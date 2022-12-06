import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { musicProviders } from './music.providers';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { Music } from './music.entity';
import { Category } from 'src/categories/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from 'src/categories/categories.providers';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Music,
      Category
    ]),
  ],
  controllers: [MusicController],
  providers: [
    ...musicProviders,
    ...categoryProviders,
    MusicService,
  ]
})
export class MusicModule {}
