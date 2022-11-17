import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { devConfig } from './config/database.config';
import { EventModule } from './module/event.module';
import { ReservationModule } from './module/reservation.module';
import { WorkshopModule } from './module/workshop.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(devConfig),
    EventModule,
    ReservationModule,
    WorkshopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
