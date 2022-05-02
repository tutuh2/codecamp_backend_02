import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { SubCategory } from 'src/apis/subCategory/entities/subCategory.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    string: Date;

    @JoinTable()
    @ManyToMany(() => SubCategory, (subCategory) => subCategory.product)
    subCategory: SubCategory[];

    @ManyToMany(() => ProductTag, (productTag) => productTag.product)
    productTag: ProductTag[];
}
