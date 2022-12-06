import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from './categories.providers';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    ...categoryProviders,
    CategoriesService,
  ]
})
export class CategoriesModule {}
