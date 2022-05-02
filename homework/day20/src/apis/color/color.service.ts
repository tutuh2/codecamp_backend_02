import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorService {
    constructor(
        @InjectRepository(Color)
        private readonly colorRepository: Repository<Color>,
    ) {}

    async findAll() {
        return await this.colorRepository.find({
            relations: ['model'],
        });
    }

    async findOne({ colorId }) {
        return await this.colorRepository.findOne({
            where: { id: colorId },
            relations: ['model'],
        });
    }

    async create({ createColorInput }) {
        const { modelId, ...color } = createColorInput;

        return await this.colorRepository.save({
            ...color,
            model: { id: modelId },
        });
    }

    async update({ colorId, updateColorInput }) {
        const color = await this.colorRepository.findOne({
            where: { id: colorId },
        });

        const newColor = {
            ...color,
            ...updateColorInput,
        };

        return await this.colorRepository.save(newColor);
    }

    async delete({ colorId }) {
        const result = await this.colorRepository.softDelete({
            id: colorId,
        });
        return result.affected ? true : false;
    }
}
