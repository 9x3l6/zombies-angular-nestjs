import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import importExportFeature from '@adminjs/import-export';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import * as AdminJSTypeorm from '@adminjs/typeorm';
import AdminJS from 'adminjs'
import * as argon2 from 'argon2';
import passwordsFeature from '@adminjs/passwords';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { CategoriesModule } from './categories/categories.module';


import { User } from './users/user.entity';
import { Category } from './categories/category.entity';
import { Video } from './videos/video.entity';
import { FilesModule } from './files/files.module';
import { WebsitesModule } from './websites/websites.module';
import { ChannelsModule } from './channels/channels.module';
import { PostsModule } from './posts/posts.module';
import { Website } from './websites/website.entity';
import { Post } from './posts/post.entity';
import { Channel } from './channels/channel.entity';
import { MusicModule } from './music/music.module';

AdminJS.registerAdapter(AdminJSTypeorm)

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'dist', 'zombies-angular-nestjs'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AdminModule.createAdminAsync({
      imports: [
        TypeOrmModule.forFeature([
          User
        ]),
      ],
      inject: [getRepositoryToken(User)],
      useFactory: (userRepo: Repository<User>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            {
              resource: User,
              options: {
                properties: { password: { isVisible: false } },
                navigation: {
                  name: 'Admin',
                  icon: 'User',
                }
              },
              features: [
                passwordsFeature({
                  properties: {
                    encryptedPassword: 'password',
                    password: 'newPassword'
                  },
                  hash: argon2.hash,
              })
              ]
            },
            { resource: Category,
              options: { parent: { name: 'Content' } },
              features: [
                importExportFeature(),
              ],
            },
            { resource: Post,
              options: { parent: { name: 'Content' } },
              features: [
                importExportFeature(),
              ],
            },
            { resource: Video,
              options: { 
                parent: { name: 'Content' },
                properties: {
                  video_urls: {
                    type: 'mixed',
                    isArray: true,
                  },
                  'video_urls.location': { type: 'string' },
                  'video_urls.url': { type: 'string' },
                },
              },
              features: [
                importExportFeature(),
              ],
            },
            { resource: Channel,
              options: { parent: { name: 'Content' } },
              features: [
                importExportFeature(),
              ],
            },
            { resource: Website,
              options: { parent: { name: 'Content' } },
              features: [
                importExportFeature(),
              ],
            },
          ],
        },
        auth: {
          authenticate: async function (email, password) {
            if ( ! await userRepo.count() ) { // login to admin if no users found
              return { email: '', username: '', password: '', };
            } else {
              const user = await userRepo.findOne({ where: { email } });
              if (user && user.isAdmin && await argon2.verify(user.password, password)) {
                return user
              }
            }
            return null
          },
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    }),
    AuthModule,
    UsersModule,
    FilesModule,

    VideosModule,
    CategoriesModule,    
    WebsitesModule,
    ChannelsModule,
    PostsModule,
    MusicModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

