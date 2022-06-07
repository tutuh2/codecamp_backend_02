import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cart } from 'src/apis/cart/entities/cart.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    email: string;

    @Column()
    // @Field(() => String) 비밀번호 노출 금지
    password: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    age: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: 0 })
    @Field(() => Int)
    point: number;

    @JoinColumn()
    @OneToOne(() => Cart)
    @Field(() => Cart)
    cart: Cart;
}
