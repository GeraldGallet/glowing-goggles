import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthorEntity } from './author.entity';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'text' })
  title: string;

  @Column({ name: 'published_year', type: 'integer' })
  publishedYear: number;

  @Column({ name: 'author_id', type: 'uuid' })
  authorId: string;

  @ManyToOne(() => AuthorEntity, { nullable: false })
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;
}
