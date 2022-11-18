import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { EventController } from '../controller/event.controller';
import { EventService } from '../provider/event.service';
@Module({
  imports: [TypeOrmModule.forFeature([Event, Workshop])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
