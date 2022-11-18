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
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
import { WorkshopService } from 'src/provider/workshop.service';

@Controller('workshops')
export class WorkshopController {
  constructor(private workshopService: WorkshopService) {}
  @Post('get-workshop-details')
  async getEventDetails(@Body() input: GetWorkshopDetailsDto) {
    const workshop = await this.workshopService.getWorkshopDetailsById(input);
    return workshop;
  }
}
