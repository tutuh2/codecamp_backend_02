import { Field, ObjectType } from '@nestjs/graphql';
import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Type {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column({ unique: true })
    @Field(() => String)
    name: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
