import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { WorkshopService } from 'src/provider/workshop.service';
import { EventController } from '../controller/event.controller';
import { EventService } from '../provider/event.service';
import { WorkshopModule } from './workshop.module';
@Module({
  imports: [TypeOrmModule.forFeature([Event, Workshop])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
