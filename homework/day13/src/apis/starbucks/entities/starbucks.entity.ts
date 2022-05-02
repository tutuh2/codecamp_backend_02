import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Starbucks {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    number: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    price: number;

    @Column()
    @Field(() => Int)
    kcal: number;

    @Column()
    @Field(() => Int)
    fat: number;

    @Column()
    @Field(() => Int)
    protein: number;

    @Column()
    @Field(() => Int)
    sodium: number;

    @Column()
    @Field(() => Int)
    carb: number;

    @Column()
    @Field(() => Int)
    caffeine: number;
}
