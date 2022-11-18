import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';
import { Event } from 'src/entity/event.entity';
import { Reservation } from 'src/entity/reservation.entity';
import { Workshop } from 'src/entity/workshop.entity';
import {
  CreateReservationRO,
  EventRO,
  ReservationRO,
  WorkshopRO,
} from 'src/interfaces/reservation/CreateReservationRO';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}
  async createReservation(
    input: CreateReservationDto,
  ): Promise<CreateReservationRO> {
    const reservation: Reservation = await this.reservationRepository.save(
      this.reservationRepository.create(input),
    );
    const workshop: Workshop = await this.workshopRepository.findOneBy({
      id: input.workshop_id,
    });
    const event: Event = await this.eventRepository.findOneBy({
      id: workshop.event_id,
    });

    const reservationRO: ReservationRO = {
      id: reservation.id,
      name: reservation.name,
      email: reservation.email,
    };
    const eventRO: EventRO = {
      id: event.id,
      title: event.title,
      start_at: event.start_at,
      end_at: event.end_at,
    };
    const workshopRO: WorkshopRO = {
      id: workshop.id,
      title: workshop.title,
      description: workshop.description,
      start_at: workshop.start_at,
      end_at: workshop.end_at,
    };
    const createReservationRO: CreateReservationRO = {
      reservation: reservationRO,
      event: eventRO,
      workshop: workshopRO,
    };
    return createReservationRO;
  }
}
