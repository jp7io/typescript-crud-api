import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './Author';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne((type) => Author, (author) => author.articles, {
    onDelete: 'CASCADE',
  })
  author: Author;
}
