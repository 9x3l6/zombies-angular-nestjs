import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity({ name: 'channels' })
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint'})
  id: number;

  @Index()
  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  image: string;
  
  @ManyToOne((type) => User, (user) => user.channels)
  @JoinColumn({ name: 'user_id' })
  user: User
}
