import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interior } from './entities/interior.entity';

@Injectable()
export class InteriorService {
    constructor(
        @InjectRepository(Interior)
        private readonly interiorRepository: Repository<Interior>,
    ) {}

    async findAll() {
        return await this.interiorRepository.find({
            relations: ['model'],
        });
    }

    async findOne({ interiorId }) {
        return await this.interiorRepository.findOne({
            where: { id: interiorId },
            relations: ['model'],
        });
    }

    async create({ createInteriorInput }) {
        const { modelId, ...interior } = createInteriorInput;

        return await this.interiorRepository.save({
            ...interior,
            model: { id: modelId },
        });
    }

    async delete({ interiorId }) {
        const result = await this.interiorRepository.softDelete({
            id: interiorId,
        });
        return result.affected ? true : false;
    }
}
