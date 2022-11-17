import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
// import { Todo } from 'src/entity/Todo.entity';
import { Event } from 'src/entity/event.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { EventDetailsRO } from 'src/interfaces/event/EventDetailsRO';
import { Repository } from 'typeorm';
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
  findAll() {
    return this.eventRepository.find();
  }
  async findOne(input: GetEventDetailsDto): Promise<EventDetailsRO> {
    const event = await this.eventRepository.findOneBy({
      id: input.id,
    });
    const workshopCount = await this.workshopRepository.count({
      where: {
        event_id: input.id,
      },
    });
    // let [sum] = await this.workshopRepository
    //   .createQueryBuilder("location")
    //   .select("SUM(location.something)", "sum")
    //   .getRawOne();
    let eventDetailsRO: EventDetailsRO = {
      id: event.id,
      title: event.title,
      start_at: event.start_at,
      end_at: event.end_at,
      total_workshops: workshopCount,
    }
    return eventDetailsRO;
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
