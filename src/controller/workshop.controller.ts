import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
import { WorkshopService } from 'src/provider/workshop.service';

@Controller('workshops')
export class WorkshopController {
  constructor(private workshopService: WorkshopService) {}
  @Get('get-active-workshops')
  async getActiveWorkshops() {
    const workshops = await this.workshopService.getActiveWorkshops();
    return workshops;
  }
  @Post('get-workshop-details')
  async getEventDetails(@Body() input: GetWorkshopDetailsDto) {
    const workshop = await this.workshopService.getWorkshopDetailsById(input);
    return workshop;
  }
}
