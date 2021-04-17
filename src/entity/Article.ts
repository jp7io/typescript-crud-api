import { Entity, Column, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';
import { Record } from './Record';
import { Author } from './Author';

@Entity()
export class Article extends Record {
  @Column()
  @Length(3, 50)
  title: string;

  @Column()
  @Length(3, 500)
  text: string;

  @ManyToOne((type) => Author, (author) => author.articles, {
    onDelete: 'CASCADE',
  })
  author: Author;
}
