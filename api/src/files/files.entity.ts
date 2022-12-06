import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'files' })
export class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 's3_key', nullable: true, type: 'jsonb' })
  public s3Key: string;

  @Column({ nullable: true, type: 'jsonb' })
  public bucket: string;

  @Column({ nullable: true, type: 'jsonb' })
  public mime: string;

  @Column({ nullable: true, type: 'text' })
  public comment: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}