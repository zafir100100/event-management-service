import { Reservation } from 'src/reservation/reservations.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';

@Entity('workshops')
export class Workshop {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    event_id: number;

    @Column()
    start_at: Date;

    @Column()
    end_at: Date;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(type => Reservation, reservation => reservation.workshop_id, { eager: true })
    @JoinColumn()
    reservations: Reservation[];
}