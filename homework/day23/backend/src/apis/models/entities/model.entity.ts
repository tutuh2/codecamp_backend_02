import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'src/apis/types/entities/type.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Model {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    range: number;

    @Column()
    @Field(() => Int)
    speed: number;

    @Column()
    @Field(() => Int)
    zeroHundred: number;

    @Column()
    @Field(() => Int)
    modelPrice: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Type)
    @Field(() => Type)
    type: Type;
}
