import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start_at: Date;

  @Column()
  end_at: Date;

  @OneToMany(() => Workshop, (workshop) => workshop.event, { eager: true })
  workshops: Workshop[];
}
