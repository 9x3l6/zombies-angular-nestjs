import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './users.providers';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User]), 
    // DefaultAdminModule,
  ],
  providers: [
    ...userProviders,
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {
  // constructor(private readonly adminSite: DefaultAdminSite) {
  //   // Register the User entity under the "User" section
  //   adminSite.register('User', User)
  // }
}
