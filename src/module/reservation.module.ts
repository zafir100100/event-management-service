import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationController } from 'src/controller/reservation.controller';
import { Reservation } from 'src/entity/reservation.entity';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { ReservationService } from 'src/provider/reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Workshop, Reservation])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
