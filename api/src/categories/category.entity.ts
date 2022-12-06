import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Video } from 'src/videos/video.entity';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  category_id: number;

  @Column()
  name: string;
  
  @Column()
  slug: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @ManyToMany(
    type => Video,
    video => video.categories
  )
  videos: Video[];

  @ManyToMany(
    type => Post,
    post => post.categories
  )
  posts: Post[];

  @ManyToOne((type) => User, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: User
}
