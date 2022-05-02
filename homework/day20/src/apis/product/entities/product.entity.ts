import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { SubCategory } from 'src/apis/subCategory/entities/subCategory.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    price: number;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Date)
    date: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @JoinTable()
    @ManyToMany(() => SubCategory, (subCategory) => subCategory.product)
    subCategory: SubCategory[];

    @JoinTable()
    @ManyToMany(() => ProductTag, (productTag) => productTag.product)
    @Field(() => [ProductTag])
    productTag: ProductTag[];
}
