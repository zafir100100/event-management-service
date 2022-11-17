import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopController } from 'src/controller/workshop.controller';
import { Workshop } from 'src/entity/workshop.entity';
import { WorkshopService } from 'src/provider/workshop.service';

@Module({
    imports: [TypeOrmModule.forFeature([Workshop])],
    controllers: [WorkshopController],
    providers: [WorkshopService],
})
export class WorkshopModule { }