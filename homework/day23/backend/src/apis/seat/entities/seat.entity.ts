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
export class Seat {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => Boolean)
    isSeat: boolean;

    @Column()
    @Field(() => Int)
    seatLayout: number;

    @ManyToOne(() => Model)
    @Field(() => Model)
    model: Model;

    @DeleteDateColumn()
    deletedAt: Date;
}
