import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatService {
    constructor(
        @InjectRepository(Seat)
        private readonly seatRepository: Repository<Seat>,
    ) {}

    async findAll() {
        return await this.seatRepository.find({
            relations: ['model'],
        });
    }

    async findOne({ seatId }) {
        return await this.seatRepository.findOne({
            where: { id: seatId },
            relations: ['model'],
        });
    }

    async create({ createSeatInput }) {
        const { modelId, ...seat } = createSeatInput;

        return await this.seatRepository.save({
            ...seat,
            model: { id: modelId },
        });
    }

    async delete({ seatId }) {
        const result = await this.seatRepository.softDelete({
            id: seatId,
        });
        return result.affected ? true : false;
    }
}
