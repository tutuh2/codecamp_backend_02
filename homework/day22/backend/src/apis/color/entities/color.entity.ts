import { Field, ObjectType } from '@nestjs/graphql';
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
export class Color {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    colorName: string;

    @ManyToOne(() => Model)
    @Field(() => Model)
    model: Model;

    @DeleteDateColumn()
    deletedAt: Date;
}
