import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WheelDrive } from './entities/wheelDrive.entity';

@Injectable()
export class WheelDriveService {
    constructor(
        @InjectRepository(WheelDrive)
        private readonly wheelDriveRepository: Repository<WheelDrive>,
    ) {}

    async findAll() {
        return await this.wheelDriveRepository.find({
            relations: ['model'],
        });
    }

    async findOne({ wheelDriveId }) {
        return await this.wheelDriveRepository.findOne({
            where: { id: wheelDriveId },
            relations: ['model'],
        });
    }

    async create({ createWheelDriveInput }) {
        const { modelId, ...wheelDrive } = createWheelDriveInput;
        return await this.wheelDriveRepository.save({
            ...wheelDrive,
            model: { id: modelId },
        });
    }

    async delete({ wheelDriveId }) {
        const result = await this.wheelDriveRepository.softDelete({
            id: wheelDriveId,
        });
        return result.affected ? true : false;
    }
}
