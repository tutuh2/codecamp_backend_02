import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './entities/model.entity';

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(Model)
        private readonly produceRepository: Repository<Model>,
    ) {}

    async findAll() {
        return await this.produceRepository.find();
    }

    async findOne({ modelId }) {
        return await this.produceRepository.findOne({
            where: { id: modelId },
        });
    }

    async create({ createModelInput }) {
        const result = await this.produceRepository.save({
            ...createModelInput,
        });
        console.log(result);

        return result;
    }

    async update({ modelId, updateModelInput }) {
        const product = await this.produceRepository.findOne({
            where: { id: modelId },
        });

        const newProduct = {
            ...product,
            ...updateModelInput,
        };

        return await this.produceRepository.save(newProduct);
    }
}
