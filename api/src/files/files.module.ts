import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { File } from './files.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[
    DatabaseModule,
    TypeOrmModule.forFeature([File]), 
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
