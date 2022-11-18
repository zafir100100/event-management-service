import {
  Body,
  Controller,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { GetActiveEventsDto } from 'src/dto/get-active-events.dto';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
import { EventService } from 'src/provider/event.service';

@Controller('events')
export class EventController {
  constructor(private eventService: EventService) { }
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
}
