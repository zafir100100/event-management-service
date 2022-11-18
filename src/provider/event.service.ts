import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetActiveEventsDto } from 'src/dto/get-active-events.dto';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { ActiveEventsRO } from 'src/interfaces/event/ActiveEventsRO';
import { EventDetailsRO } from 'src/interfaces/event/EventDetailsRO';
import { Raw, Repository } from 'typeorm';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) { }
  async getActiveEvents(input: GetActiveEventsDto): Promise<ActiveEventsRO> {
    const eventsCount = await this.eventRepository.count({
      where: {
        start_at: Raw((alias) => `${alias} > NOW()`),
      },
    });
    const events = await this.eventRepository.find({
      where: {
        start_at: Raw((alias) => `${alias} > NOW()`),
      },
    });
    let activeEventsRO: ActiveEventsRO = {
      events: events,
      pagination: {
        total: eventsCount,
        per_page: input.per_page,
        total_pages: Math.ceil(eventsCount / input.per_page),
        current_page: input.current_page,
      }
    }
    return activeEventsRO;
  }
  async getEventDetailsById(input: GetEventDetailsDto): Promise<EventDetailsRO> {
    const event = await this.eventRepository.findOneBy({
      id: input.id,
    });
    const workshopCount = await this.workshopRepository.count({
      where: {
        event_id: input.id,
      },
    });
    let eventDetailsRO: EventDetailsRO = {
      id: event.id,
      title: event.title,
      start_at: event.start_at,
      end_at: event.end_at,
      total_workshops: workshopCount,
    }
    return eventDetailsRO;
  }
}
