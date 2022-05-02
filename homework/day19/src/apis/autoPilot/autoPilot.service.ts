import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutoPilot } from './entities/autoPilot.entity';

@Injectable()
export class AutoPilotService {
    constructor(
        @InjectRepository(AutoPilot)
        private readonly autoPilotRepository: Repository<AutoPilot>,
    ) {}

    async findAll() {
        return await this.autoPilotRepository.find({ relations: ['model'] });
    }

    async findOne({ autoPilotId }) {
        return await this.autoPilotRepository.findOne({
            where: { id: autoPilotId },
            relations: ['model'],
        });
    }

    async create({ createAutoPilotInput }) {
        const { modelId, ...autoPilot } = createAutoPilotInput;

        return await this.autoPilotRepository.save({
            ...autoPilot,
            model: { id: modelId },
        });
    }

    async update({ autoPilotId, updateAutoPilotInput }) {
        const autoPilot = await this.autoPilotRepository.findOne({
            where: { id: autoPilotId },
        });

        const newautoPilot = {
            ...autoPilot,
            ...updateAutoPilotInput,
        };

        return await this.autoPilotRepository.save(newautoPilot);
    }

    async delete({ autoPilotId }) {
        const result = await this.autoPilotRepository.softDelete({
            id: autoPilotId,
        });
        return result.affected ? true : false;
    }
}
