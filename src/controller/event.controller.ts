import { Body, Controller, Post } from '@nestjs/common';
import { GetActiveEventsDto } from 'src/dto/get-active-events.dto';
import { GetEventDetailsDto } from 'src/dto/get-event-details.dto';
import { EventService } from 'src/provider/event.service';

@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}
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
}
