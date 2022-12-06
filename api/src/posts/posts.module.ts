import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postProviders } from './posts.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { Category } from 'src/categories/category.entity';
import { categoryProviders } from 'src/categories/categories.providers';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Post,
      Category
    ]),
  ],
  controllers: [PostsController],
  providers: [
    ...postProviders,
    ...categoryProviders,
    PostsService,
  ]
})
export class PostsModule {}
