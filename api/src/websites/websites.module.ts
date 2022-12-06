import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { Website } from './website.entity';
import { WebsitesController } from './websites.controller';
import { websiteProviders } from './websites.providers';
import { WebsitesService } from './websites.service';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Website,
    ]),
  ],
  controllers: [WebsitesController],
  providers: [
    ...websiteProviders,
    WebsitesService,
  ]
})
export class WebsitesModule {}
