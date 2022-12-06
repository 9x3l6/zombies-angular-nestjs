import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';

@Index(['title'])
@Index(['video_id'])
@Entity({ name: 'videos' })
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  link: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  video_id: string;

  @Column()
  image_url: string;

  // @Column({ type: 'json', array: false, nullable: true })
  // video_urls: VideoLink[];
  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  video_urls: Array<{ location: string, url: string }>;

  @Column({ nullable: true })
  duration: string;

  @JoinTable()
  @ManyToMany(
    type => Category,
    category => category.videos,
  )
  categories: string[];

  @ManyToOne((type) => User, (user) => user.videos)
  @JoinColumn({ name: 'user_id' })
  user: User
}
