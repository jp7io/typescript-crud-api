import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Article } from './Article';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Article, (article) => article.author, {
    cascade: ['insert', 'update'],
  })
  articles: Article[];
}
