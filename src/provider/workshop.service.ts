import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from 'src/entity/workshop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopService {
    constructor(
        @InjectRepository(Workshop)
        private workshopRepository: Repository<Workshop>,
    ) { } 

}