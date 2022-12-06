import { BaseEntity, Index, Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Index(['url'])
@Entity({ name: 'websites' })
export class Website extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}
