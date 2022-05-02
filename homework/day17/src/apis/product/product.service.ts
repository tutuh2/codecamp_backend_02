import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly produceRepository: Repository<Product>,
    ) {}

    async findAll() {
        return await this.produceRepository.find();
    }

    async findOne({ productId }) {
        return await this.produceRepository.findOne({
            where: { id: productId },
        });
    }

    async create({ createProductInput }) {
        const result = await this.produceRepository.save({
            ...createProductInput,
        });
        console.log(result);

        return result;
    }

    async update({ productId, updateProductInput }) {
        const product = await this.produceRepository.findOne({
            where: { id: productId },
        });

        const newProduct = {
            ...product,
            ...updateProductInput,
        };

        return await this.produceRepository.save(newProduct);
    }
}
