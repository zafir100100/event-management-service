import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetWorkshopDetailsDto } from 'src/dto/get-workshop-details.dto';
import { Reservation } from 'src/entity/reservation.entity';
import { Workshop } from 'src/entity/workshop.entity';
import { WorkshopDetailsRO } from 'src/interfaces/workshop/WorkshopDetailsRO';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopService {
  constructor(
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) { }
  async getWorkshopDetailsById(input: GetWorkshopDetailsDto): Promise<WorkshopDetailsRO> {
    const workshop = await this.workshopRepository.findOneBy({
      id: input.id,
    });
    const reservationCount = await this.reservationRepository.count({
      where: {
        workshop_id: input.id,
      },
    });
    let workshopDetailsRO: WorkshopDetailsRO = {
      id: workshop.id,
      title: workshop.title,
      description: workshop.description,
      start_at: workshop.start_at,
      end_at: workshop.end_at,
      total_reservations: reservationCount,
    }
    return workshopDetailsRO;
  }
}
