import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type)
        private readonly typeRepository: Repository<Type>,
    ) {}

    async create({ name }) {
        const result = await this.typeRepository.save({ name });

        return result;
    }
}
