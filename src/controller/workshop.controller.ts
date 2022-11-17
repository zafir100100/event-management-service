import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { WorkshopService } from 'src/provider/workshop.service';

@Controller('workshops')
export class WorkshopController {
    constructor(private workshopService: WorkshopService) { }
}