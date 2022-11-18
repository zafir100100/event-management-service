import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateReservationDto } from 'src/dto/create-reservation.dto';
import { ReservationService } from 'src/provider/reservation.service';

@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}
  @Post('create-reservation')
  async createReservation(@Body() input: CreateReservationDto) {
    const reservation = await this.reservationService.createReservation(input);
    return reservation;
  }
}
