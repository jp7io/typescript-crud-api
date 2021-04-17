import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class Record {
  @PrimaryGeneratedColumn()
  id: number;
}
