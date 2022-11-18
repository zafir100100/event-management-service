import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';
import { Event } from 'src/entity/event.entity';
import { Reservation } from 'src/entity/reservation.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Reservation>,
    @InjectRepository(Event)
    private eventRepository: Repository<Reservation>,
  ) { }
  async createReservation(input: CreateReservationDto) {
    return this.reservationRepository.save(
      this.reservationRepository.create(input)
    );
  }
}
