import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationController } from 'src/controller/reservation.controller';
import { Reservation } from 'src/entity/reservation.entity';
import { ReservationService } from 'src/provider/reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
