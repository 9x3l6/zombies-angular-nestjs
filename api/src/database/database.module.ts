import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DATABASE_HOST'), //process.env.DATABASE_HOST || 'localhost',
        port: config.get('DATABASE_PORT'), //parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: config.get('DATABASE_USERNAME'), //process.env.DATABASE_USERNAME || 'zombies',
        password: config.get('DATABASE_PASSWORD'), //process.env.DATABASE_PASSWORD || 'zombies123',
        database: config.get('DATABASE_NAME'), //process.env.DATABASE_NAME || 'zombies',
        entities: [__dirname + '/../**/*.entity.js', ],
        migrations: [__dirname + '/../migrations/*.js'],
        synchronize: true,
        logging: true,
    }),
  } as TypeOrmModuleOptions),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
