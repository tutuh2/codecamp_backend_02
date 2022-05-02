import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from '../models/entities/model.entity';
import { Seat } from './entities/seat.entity';
import { SeatResolver } from './seat.resolver';
import { SeatService } from './seat.service';

@Module({
    imports: [TypeOrmModule.forFeature([Seat, Model])],
    providers: [SeatResolver, SeatService],
})
export class SeatModule {}
