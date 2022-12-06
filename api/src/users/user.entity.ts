import { Category } from 'src/categories/category.entity';
import { Channel } from 'src/channels/channel.entity';
import { Post } from 'src/posts/post.entity';
import { Video } from 'src/videos/video.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ length: 128, unique: true, nullable: false })
  email: string;

  @Column({ length: 128, nullable: false })
  password: string;

  @Column('boolean', { nullable: true })
  isAdmin: boolean;

  @OneToMany((type) => Category, (category) => category.user)
  categories: Category[];

  @OneToMany((type) => Video, (video) => video.user)
  videos: Video[];

  @OneToMany((type) => Channel, (channel) => channel.user)
  channels: Channel[];

  @OneToMany((type) => Post, (post) => post.user)
  posts: Post[];
}
