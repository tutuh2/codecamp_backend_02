import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wheelsize } from './entities/wheelsize.entity';

@Injectable()
export class WheelsizeSerivce {
    constructor(
        @InjectRepository(Wheelsize)
        private readonly wheelsizeRepository: Repository<Wheelsize>,
    ) {}

    async findAll() {
        return await this.wheelsizeRepository.find({
            relations: ['model'],
        });
    }

    async findOne({ wheelsizeId }) {
        return await this.wheelsizeRepository.findOne({
            where: { id: wheelsizeId },
            relations: ['model'],
        });
    }

    async create({ createWheelsizeInput }) {
        const { modelId, ...wheelsize } = createWheelsizeInput;
        return await this.wheelsizeRepository.save({
            ...wheelsize,
            model: { id: modelId },
        });
    }

    async delete({ wheelsizeId }) {
        const result = await this.wheelsizeRepository.softDelete({
            id: wheelsizeId,
        });
        return result.affected ? true : false;
    }
}
