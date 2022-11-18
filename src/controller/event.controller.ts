import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { GetActiveEventsDto } from 'src/dto/get-active-events.dto';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
import { EventService } from 'src/provider/event.service';
// import { TodoInterface, TodosService } from 'src/provider/todo.service';
// interface CreateTodoDto {
//     name: string,
//     complete: boolean
// }
@Controller('events')
export class EventController {
  constructor(private eventService: EventService) { }
  // @Post()
  // async create(@Body() createTodoDto: CreateTodoDto) {
  //     const todo = await this.todosService.create(createTodoDto);
  //     if (!todo) {
  //         return 'error in creating todo'
  //     }
  //     return 'todo created successfully'
  // }
  @Post('get-active-events')
  async getActiveEvents(@Body() input: GetActiveEventsDto) {
    const events = await this.eventService.getActiveEvents(input);
    return events;
  }
  @Post('get-event-details')
  async getEventDetails(@Body() input: GetEventDetailsDto) {
    const event = await this.eventService.getEventDetailsById(input);
    return event;
  }
  @Get('get-active-workshops')
  async getActiveWorkshops() {
    const workshops = await this.eventService.getActiveWorkshops();
    return workshops;
  }
  @Get()
  async findAll(@Req() request: Request) {
    const items = await this.eventService.findAll();
    return items;
    // const cats: Array<TodoInterface> = await this.todosService.findAll()
    // return cats
  }
  // @Put(':id')
  // async update(@Param('id') id: string, @Body() body: any) {
  //     const newCat: any = await this.todosService.update(id, body)
  //     return "cat updated";
  // }
  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //     await this.todosService.delete(id)
  //     return "cat deleted"
  // }
}
