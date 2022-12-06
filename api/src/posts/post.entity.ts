import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Category } from 'src/categories/category.entity';

@Index(['title', 'post_id'])
@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: true })
  post_id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  image_url: string;

  @JoinTable()
  @ManyToMany(
    type => Category,
    category => category.posts,
  )
  categories: string[];

  @ManyToOne((type) => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User
}
