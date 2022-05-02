import { Product } from 'src/apis/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductImages {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    imageUrl: string;

    @ManyToOne(() => Product)
    product: Product;
}
