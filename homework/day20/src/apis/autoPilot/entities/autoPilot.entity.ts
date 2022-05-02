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
export class AutoPilot {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => Boolean)
    isAuto: boolean;

    @Column()
    @Field(() => Int)
    price: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Model)
    @Field(() => Model)
    model: Model;
}
