import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Todo } from 'src/entity/Todo.entity';
import { Event } from 'src/entity/event.entity';
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