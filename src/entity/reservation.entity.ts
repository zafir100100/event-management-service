import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Workshop } from './workshop.entity';
@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  workshop_id: number;

  @ManyToOne(() => Workshop, (workshop) => workshop.reservations)
  workshop: Workshop;
}
