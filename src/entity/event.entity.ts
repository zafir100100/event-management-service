import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
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

    // @OneToMany(type => Workshop, workshop => workshop.event_id, { eager: true })
    // @JoinColumn()
    // workshops: Workshop[];
}