import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Article } from './Article';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(3, 50)
  name: string;

  @OneToMany((type) => Article, (article) => article.author, {
    cascade: ['insert', 'update'],
  })
  articles: Article[];
}
