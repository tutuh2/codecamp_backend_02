import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Model } from 'src/apis/models/entities/model.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Wheelsize {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => Int)
    size: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    price: number;

    @ManyToOne(() => Model)
    @Field(() => Model)
    model: Model;

    @DeleteDateColumn()
    deletedAt: Date;
}
