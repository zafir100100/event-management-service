import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail } from 'class-validator';
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
}
