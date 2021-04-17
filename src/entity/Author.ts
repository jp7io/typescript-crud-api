import { Entity, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Record } from './Record';
import { Article } from './Article';

@Entity()
export class Author extends Record {
  @Column()
  @Length(3, 50)
  name: string;

  @OneToMany((type) => Article, (article) => article.author, {
    cascade: ['insert', 'update'],
  })
  articles: Article[];
}
