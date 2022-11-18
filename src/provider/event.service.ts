import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetActiveEventsDto } from 'src/dto/get-active-events.dto';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
// import { Todo } from 'src/entity/Todo.entity';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { ActiveEventsRO } from 'src/interfaces/event/ActiveEventsRO';
import { EventDetailsRO } from 'src/interfaces/event/EventDetailsRO';
import { WorkshopDetailsRO } from 'src/interfaces/workshop/WorkshopDetailsRO';
import { Raw, Repository } from 'typeorm';
// export interface TodoInterface {
//     name: string,
//     complete: boolean,
// }
@Injectable()
export class EventService {
  constructor(
    // private todoRepository: Repository<TodoInterface>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) { }
  // create(todo: TodoInterface): Promise<TodoInterface> {
  //     return this.todoRepository.save(
  //         this.todoRepository.create(todo)
  //     );
  // }
  // findAll(): Promise<TodoInterface[]> {
  //     return this.todoRepository.find();
  // }
  async findAll() {
    return await this.eventRepository.find();
  }
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
  async getActiveWorkshops() {
    const events = await this.eventRepository.find({
      where: {
        start_at: Raw((alias) => `${alias} > NOW()`),
      },
      relations: {
        workshops: true,
      }
    });
    return events;
  }

  // update(id: string, data: any): Promise<any> {
  //     return this.todoRepository
  //         .createQueryBuilder()
  //         .update()
  //         .set({
  //             name: data.name
  //         })
  //         .where('id = :id', { id })
  //         .execute()
  // }
  // delete(id: string): Promise<any> {
  //     return this.todoRepository
  //         .createQueryBuilder()
  //         .delete()
  //         .from(Todo)
  //         .where('id = :id', { id })
  //         .execute()
  // }
}
