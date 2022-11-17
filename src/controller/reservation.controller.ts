import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ReservationService } from 'src/provider/reservation.service';

@Controller('reservations')
export class ReservationController {
    constructor(private reservationService: ReservationService) { }
}