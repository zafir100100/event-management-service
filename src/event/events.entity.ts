import { Workshop as Workshop } from 'src/workshop/workshops.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';

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

    @OneToMany(type => Workshop, workshop => workshop.event_id, { eager: true })
    @JoinColumn()
    workshops: Workshop[];
}